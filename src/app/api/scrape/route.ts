import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

const parser = new Parser();

// Top tech feeds covering new tech, products, software, and web development
const FEEDS = [
    { url: 'https://techcrunch.com/feed/', category: 'Technology' },
    { url: 'https://techcrunch.com/category/artificial-intelligence/feed/', category: 'Technology' }, // AI News
    { url: 'https://www.artificialintelligence-news.com/feed/', category: 'Insights' }, // Dedicated AI News
    { url: 'https://www.theverge.com/rss/index.xml', category: 'Technology' },
    { url: 'https://venturebeat.com/feed/', category: 'Insights' },
    { url: 'https://www.wired.com/feed/rss', category: 'Technology' },
    { url: 'https://dev.to/feed', category: 'Insights' }, // Software & Web Dev
    { url: 'https://hnrss.org/frontpage', category: 'Technology' } // Hacker News front page
];

export async function GET() {
    try {
        const draftsPath = path.join(process.cwd(), 'src/data/drafts.json');
        const newsPath = path.join(process.cwd(), 'src/data/news.json');
        
        let existingDrafts: any[] = [];
        if (fs.existsSync(draftsPath)) {
            existingDrafts = JSON.parse(fs.readFileSync(draftsPath, 'utf8'));
        }

        let existingNews: any[] = [];
        if (fs.existsSync(newsPath)) {
            existingNews = JSON.parse(fs.readFileSync(newsPath, 'utf8'));
        }

        let newDraftsCount = 0;

        for (const feed of FEEDS) {
            const parsedFeed = await parser.parseURL(feed.url);
            
            // Get top 8 from each feed to provide plenty of options
            const topItems = parsedFeed.items.slice(0, 8);
            
            for (const item of topItems) {
                // Check if already exists in drafts or news.json to avoid duplicates
                const isDraft = existingDrafts.some(d => (d.sourceLink || d.link) === item.link);
                const isPublished = existingNews.some(n => (n.sourceLink || n.link) === item.link);

                if (!isDraft && !isPublished) {
                    
                    // Basic excerpt cleaning (remove HTML tags)
                    let cleanExcerpt = item.contentSnippet || item.content || '';
                    cleanExcerpt = cleanExcerpt.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...';
                    
                    // Format date
                    const dateObj = item.pubDate ? new Date(item.pubDate) : new Date();
                    const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

                    const randomImgId = Math.floor(Math.random() * 6) + 1;
                    const newId = 'draft-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9);
                    
                    let fullContent = item.content || item.contentSnippet || cleanExcerpt;

                    existingDrafts.push({
                        id: newId,
                        category: feed.category,
                        date: formattedDate,
                        readTime: '3 min', // estimated
                        title: item.title || 'Untitled',
                        excerpt: cleanExcerpt,
                        link: `/news/${newId}`, // internal dynamic route
                        sourceLink: item.link, // direct link to source
                        fullContent: fullContent,
                        author: item.creator || item.author || 'Editorial Team',
                        imageClass: `news-card-img--${randomImgId}`,
                        isFeatured: false
                    });
                    newDraftsCount++;
                }
            }
        }

        fs.writeFileSync(draftsPath, JSON.stringify(existingDrafts, null, 2));

        return NextResponse.json({ success: true, message: `Scraped ${newDraftsCount} new articles.` });

    } catch (error) {
        console.error('Scrape error:', error);
        return NextResponse.json({ success: false, error: 'Failed to scrape' }, { status: 500 });
    }
}
