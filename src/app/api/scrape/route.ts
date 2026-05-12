import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

const parser = new Parser();

// Top tech feeds
const FEEDS = [
    { url: 'https://techcrunch.com/feed/', category: 'Technology' },
    { url: 'https://www.theverge.com/rss/index.xml', category: 'Technology' },
    { url: 'https://venturebeat.com/feed/', category: 'Insights' }
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
            
            // Just get top 3 from each to not overwhelm
            const topItems = parsedFeed.items.slice(0, 3);
            
            for (const item of topItems) {
                // Check if already exists in drafts or news.json to avoid duplicates
                const isDraft = existingDrafts.some(d => d.link === item.link);
                const isPublished = existingNews.some(n => n.link === item.link);

                if (!isDraft && !isPublished) {
                    
                    // Basic excerpt cleaning (remove HTML tags)
                    let cleanExcerpt = item.contentSnippet || item.content || '';
                    cleanExcerpt = cleanExcerpt.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...';
                    
                    // Format date
                    const dateObj = item.pubDate ? new Date(item.pubDate) : new Date();
                    const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

                    const randomImgId = Math.floor(Math.random() * 6) + 1;

                    existingDrafts.push({
                        id: 'draft-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9),
                        category: feed.category,
                        date: formattedDate,
                        readTime: '3 min', // estimated
                        title: item.title || 'Untitled',
                        excerpt: cleanExcerpt,
                        link: item.link, // direct link to source
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
