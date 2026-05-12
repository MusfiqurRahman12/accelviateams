import { notFound } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    // Completely disable the admin route in production (on Vercel)
    // It will only be accessible when running locally via 'npm run dev'
    if (process.env.NODE_ENV === 'production') {
        notFound();
    }
    
    return <>{children}</>;
}
