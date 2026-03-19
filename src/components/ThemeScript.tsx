'use client';

export default function ThemeScript() {
    const codeToRunOnClient = `
    (function() {
      var t = localStorage.getItem('theme') || 'dark';
      document.documentElement.setAttribute('data-theme', t);
    })();
  `;
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
}
