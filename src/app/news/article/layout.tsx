import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AccelviaTeams Launches New Mobile App Development Service | AccelviaTeams News',
    description: "We're excited to announce our expanded mobile development offering — purpose-built for early-stage startups.",
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
