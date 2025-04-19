"use client";
import { useState, useEffect } from 'react';
import { getContents, deleteContent } from '@/lib/admin';

export default function ManageContent() {
  const [contents, setContents] = useState([]);
  const [filters, setFilters] = useState({
    type: 'all',
    platform: 'all',
    search: ''
  });

  useEffect(() => {
    loadContents();
  }, [filters]);

  const loadContents = async () => {
    const activeFilters = {};
    if (filters.type !== 'all') activeFilters.type = filters.type;
    if (filters.platform !== 'all') activeFilters.platform = filters.platform;
    if (filters.search) activeFilters.search = filters.search;

    const data = await getContents(activeFilters);
    setContents(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bu içeriği silmek istediğinizden emin misiniz?')) {
      try {
        await deleteContent(id);
        await loadContents();
      } catch (error) {
        console.error('Error deleting content:', error);
        alert('İçerik silinirken bir hata oluştu.');
      }
    }
  };

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">İçerikleri Yönet</h1>
      
      {/* Search and Filter */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="İçerik ara..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="flex-1 p-2 border rounded focus:ring-2 focus:ring-yellow-500"
          />
          <select 
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="p-2 border rounded focus:ring-2 focus:ring-yellow-500"
          >
            <option value="all">Tüm Türler</option>
            <option value="movie">Film</option>
            <option value="series">Dizi</option>
          </select>
          <select 
            value={filters.platform}
            onChange={(e) => handleFilterChange('platform', e.target.value)}
            className="p-2 border rounded focus:ring-2 focus:ring-yellow-500"
          >
            <option value="all">Tüm Platformlar</option>
            <option value="netflix">Netflix</option>
            <option value="prime">Prime Video</option>
            <option value="disney">Disney+</option>
            <option value="hbo">HBO Max</option>
            <option value="apple">Apple TV+</option>
          </select>
        </div>
      </div>

      {/* Content List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Başlık
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tür
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Yıl
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Platform
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contents.map((content) => (
              <tr key={content.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {content.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {content.type === 'movie' ? 'Film' : 'Dizi'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {content.releaseYear}
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">
                  {content.platform}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => window.location.href = `/admin/content/edit/${content.id}`}
                    className="text-yellow-600 hover:text-yellow-900 mr-4"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleDelete(content.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
            {contents.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  İçerik bulunamadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}