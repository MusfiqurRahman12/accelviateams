'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewsApprovalAdmin() {
    const [drafts, setDrafts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchDrafts();
    }, []);

    const fetchDrafts = async () => {
        try {
            const res = await fetch('/api/drafts');
            const data = await res.json();
            if (data.drafts) setDrafts(data.drafts);
        } catch (e) {
            console.error(e);
        }
    };

    const handleScrape = async () => {
        setLoading(true);
        setMessage('Scraping top tech sites... This may take a moment.');
        try {
            const res = await fetch('/api/scrape');
            const data = await res.json();
            setMessage(data.message || 'Scraping complete!');
            fetchDrafts();
        } catch (e) {
            setMessage('Error scraping feeds.');
        }
        setLoading(false);
    };

    const handleAction = async (id: string, action: 'approve' | 'delete') => {
        setLoading(true);
        try {
            const res = await fetch('/api/approve', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, action })
            });
            const data = await res.json();
            if (data.success) {
                setMessage(`Article ${action}d successfully!`);
                fetchDrafts();
            } else {
                setMessage(`Failed to ${action} article.`);
            }
        } catch (e) {
            setMessage('Error processing article.');
        }
        setLoading(false);
    };

    return (
        <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-primary, sans-serif)', minHeight: '100vh' }}>
            <div style={{ marginBottom: '2rem' }}>
                <Link href="/" style={{ color: 'var(--green-main, #14b8a6)', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Site</Link>
            </div>
            
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: 'bold' }}>News Approval Dashboard</h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>Scrape top articles from TechCrunch, The Verge, and VentureBeat, and approve them to appear on your news feed.</p>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '3rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
                <button 
                    onClick={handleScrape} 
                    disabled={loading}
                    style={{ 
                        background: 'var(--green-main, #14b8a6)', 
                        color: 'white', 
                        padding: '0.75rem 1.5rem', 
                        borderRadius: '4px', 
                        border: 'none', 
                        cursor: loading ? 'not-allowed' : 'pointer', 
                        fontWeight: 'bold',
                        opacity: loading ? 0.7 : 1
                    }}
                >
                    {loading ? 'Processing...' : 'Run Scraper Now'}
                </button>
                {message && <span style={{ color: '#333', fontWeight: '500' }}>{message}</span>}
            </div>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
                Pending Drafts ({drafts.length})
            </h2>
            
            {drafts.length === 0 ? (
                <div style={{ padding: '3rem', textAlign: 'center', background: '#f8f9fa', borderRadius: '8px', border: '1px dashed #ccc' }}>
                    <p style={{ color: '#666', fontSize: '1.1rem' }}>No drafts pending approval.</p>
                    <p style={{ color: '#888', marginTop: '0.5rem' }}>Run the scraper to find new articles!</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {drafts.map(draft => (
                        <div key={draft.id} style={{ border: '1px solid #eaeaea', padding: '1.5rem', borderRadius: '12px', background: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'center' }}>
                                <span style={{ background: '#f1f5f9', color: '#334155', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{draft.category}</span>
                                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{draft.date}</span>
                            </div>
                            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                                <a href={draft.link} target="_blank" rel="noreferrer" style={{ color: '#0f172a', textDecoration: 'none' }}>{draft.title}</a>
                            </h3>
                            <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{draft.excerpt}</p>
                            
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button 
                                    onClick={() => handleAction(draft.id, 'approve')}
                                    disabled={loading}
                                    style={{ background: '#10b981', color: 'white', padding: '0.6rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    Approve & Publish
                                </button>
                                <button 
                                    onClick={() => handleAction(draft.id, 'delete')}
                                    disabled={loading}
                                    style={{ background: '#ef4444', color: 'white', padding: '0.6rem 1.25rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
                                >
                                    Discard
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
