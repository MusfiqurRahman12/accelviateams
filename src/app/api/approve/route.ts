import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const { id, action } = await request.json(); // action can be 'approve' or 'delete'

        const draftsPath = path.join(process.cwd(), 'src/data/drafts.json');
        const newsPath = path.join(process.cwd(), 'src/data/news.json');

        if (!fs.existsSync(draftsPath) || !fs.existsSync(newsPath)) {
            return NextResponse.json({ success: false, error: 'Data files missing' }, { status: 500 });
        }

        let drafts = JSON.parse(fs.readFileSync(draftsPath, 'utf8'));
        let news = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

        const draftIndex = drafts.findIndex((d: any) => d.id === id);
        
        if (draftIndex === -1) {
            return NextResponse.json({ success: false, error: 'Draft not found' }, { status: 404 });
        }

        const targetDraft = drafts[draftIndex];

        // Remove from drafts
        drafts.splice(draftIndex, 1);

        if (action === 'approve') {
            // Assign a stable news ID
            targetDraft.id = 'post-' + Date.now();
            
            // Insert after the featured post, or at the start if no featured
            const firstNonFeaturedIndex = news.findIndex((n: any) => !n.isFeatured);
            if (firstNonFeaturedIndex !== -1) {
                news.splice(firstNonFeaturedIndex, 0, targetDraft);
            } else {
                news.push(targetDraft);
            }
            
            fs.writeFileSync(newsPath, JSON.stringify(news, null, 2));
        }

        fs.writeFileSync(draftsPath, JSON.stringify(drafts, null, 2));

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Approval error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
