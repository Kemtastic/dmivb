"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (!storedUserType || storedUserType !== 'admin') {
      router.push('/login-dmivb');
    }
    setUserType(storedUserType);
  }, [router]);

  if (!userType || userType !== 'admin') {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
          <nav className="space-y-2">
            <Link href="/admin" className="block px-4 py-2 rounded hover:bg-gray-800">
              Dashboard
            </Link>
            <Link href="/admin/content/add" className="block px-4 py-2 rounded hover:bg-gray-800">
              İçerik Ekle
            </Link>
            <Link href="/admin/content/manage" className="block px-4 py-2 rounded hover:bg-gray-800">
              İçerikleri Yönet
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}