import type { Metadata } from 'next';
import ClientArticleLayout from './ClientArticleLayout';

export const metadata: Metadata = {
    title: 'The Hidden ROI of Custom Web Applications in 2026 | AccelviaTeams',
    description: 'Discover how custom web applications streamline internal processes, reduce overhead costs, and create unparalleled user experiences that drive revenue.',
    openGraph: {
        title: 'The Hidden ROI of Custom Web Applications in 2026',
        description: 'Discover how custom web applications streamline internal processes, reduce overhead costs, and create unparalleled user experiences that drive revenue.',
        url: 'https://accelviateams.com/news/roi-custom-web-applications',
        images: [{ url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop', width: 1200, height: 630 }],
    },
};

export default function ArticlePage() {
    return <ClientArticleLayout />;
}
