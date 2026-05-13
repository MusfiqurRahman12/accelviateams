import type { Metadata } from 'next';
import ClientArticleLayout from './ClientArticleLayout';

export const metadata: Metadata = {
    title: 'A Fail-Proof Cloud Migration Strategy for Growing Businesses | AccelviaTeams',
    description: 'Moving from on-premise to the cloud is daunting. We outline the exact step-by-step strategy to ensure zero downtime and maximum data integrity.',
    openGraph: {
        title: 'A Fail-Proof Cloud Migration Strategy for Growing Businesses',
        description: 'Moving from on-premise to the cloud is daunting. We outline the exact step-by-step strategy to ensure zero downtime and maximum data integrity.',
        url: 'https://accelviateams.com/news/cloud-migration-strategy',
        images: [{ url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop', width: 1200, height: 630 }],
    },
};

export default function ArticlePage() {
    return <ClientArticleLayout />;
}
