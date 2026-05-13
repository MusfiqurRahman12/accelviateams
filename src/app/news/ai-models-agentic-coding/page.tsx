import type { Metadata } from 'next';
import Link from 'next/link';
import ClientArticleLayout from './ClientArticleLayout';

export const metadata: Metadata = {
    title: '2026 AI Models Comparison: How Agentic Coding is Thriving | AccelviaTeams',
    description: 'A comprehensive comparison of the best trending AI models in 2026 including Gemini 3, GPT-5, and Claude 4, and how agentic coding is revolutionizing software development.',
    openGraph: {
        title: '2026 AI Models Comparison: How Agentic Coding is Thriving',
        description: 'Discover how agentic AI models are shifting from simple code completion to autonomous execution.',
        url: 'https://accelviateams.com/news/ai-models-agentic-coding',
        siteName: 'AccelviaTeams',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'article',
    },
};

export default function AgenticAiModelsPage() {
    return <ClientArticleLayout />;
}
