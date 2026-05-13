import type { Metadata } from 'next';
import ClientArticleLayout from './ClientArticleLayout';

export const metadata: Metadata = {
    title: 'Securing WordPress: Why Custom Plugins Outperform Off-the-Shelf | AccelviaTeams',
    description: 'A deep technical analysis of WordPress security vulnerabilities and how bespoke plugin development mitigates risk for enterprise platforms.',
    openGraph: {
        title: 'Securing WordPress: Why Custom Plugins Outperform Off-the-Shelf',
        description: 'A deep technical analysis of WordPress security vulnerabilities and how bespoke plugin development mitigates risk for enterprise platforms.',
        url: 'https://accelviateams.com/news/securing-wordpress-custom-plugins',
        images: [{ url: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop', width: 1200, height: 630 }],
    },
};

export default function ArticlePage() {
    return <ClientArticleLayout />;
}
