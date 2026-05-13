import type { Metadata } from 'next';
import ClientArticleLayout from './ClientArticleLayout';

export const metadata: Metadata = {
    title: 'Custom CMS vs. Ready-Made: Which is Right for Your Business? | AccelviaTeams',
    description: 'A deep dive into why enterprise businesses are moving away from restrictive off-the-shelf platforms and investing in custom CMS development for maximum scalability.',
    openGraph: {
        title: 'Custom CMS vs. Ready-Made: Which is Right for Your Business?',
        description: 'A deep dive into why enterprise businesses are moving away from restrictive off-the-shelf platforms and investing in custom CMS development for maximum scalability.',
        url: 'https://accelviateams.com/news/custom-cms-vs-ready-made',
        images: [{ url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', width: 1200, height: 630 }],
    },
};

export default function ArticlePage() {
    return <ClientArticleLayout />;
}
