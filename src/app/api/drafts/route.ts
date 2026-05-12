import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const draftsPath = path.join(process.cwd(), 'src/data/drafts.json');
        if (!fs.existsSync(draftsPath)) {
            return NextResponse.json({ drafts: [] });
        }
        const drafts = JSON.parse(fs.readFileSync(draftsPath, 'utf8'));
        return NextResponse.json({ drafts });
    } catch (e) {
        return NextResponse.json({ drafts: [] });
    }
}
