// components/Sidebar.tsx
'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </li>
      </ul>
    </aside>
  );
}
