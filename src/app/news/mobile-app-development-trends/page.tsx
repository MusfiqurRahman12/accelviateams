import type { Metadata } from 'next';
import ClientArticleLayout from './ClientArticleLayout';

export const metadata: Metadata = {
    title: 'Why Mobile App Development is Crucial for Enterprise Growth | AccelviaTeams',
    description: 'With over 70% of digital traffic coming from mobile, having a responsive website is no longer enough. Here is why your business needs a dedicated mobile app.',
    openGraph: {
        title: 'Why Mobile App Development is Crucial for Enterprise Growth',
        description: 'With over 70% of digital traffic coming from mobile, having a responsive website is no longer enough. Here is why your business needs a dedicated mobile app.',
        url: 'https://accelviateams.com/news/mobile-app-development-trends',
        images: [{ url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop', width: 1200, height: 630 }],
    },
};

export default function ArticlePage() {
    return <ClientArticleLayout />;
}
