"use client";
import { useState } from 'react';
import { createContent } from '@/lib/admin';
import { useRouter } from 'next/navigation';

export default function AddContent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    type: 'movie',
    releaseYear: '',
    genres: [],
    trailerUrl: '',
    director: '',
    cast: '',
    description: '',
    platform: 'netflix',
    posterUrl: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert cast string to array
      const processedData = {
        ...formData,
        cast: formData.cast.split(',').map(item => item.trim()),
        releaseYear: parseInt(formData.releaseYear)
      };
      
      await createContent(processedData);
      router.push('/admin/content/manage');
    } catch (error) {
      console.error('Error creating content:', error);
      alert('İçerik eklenirken bir hata oluştu.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Yeni İçerik Ekle</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Başlık
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tür
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="movie">Film</option>
              <option value="series">Dizi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Yayın Yılı
            </label>
            <input
              type="number"
              name="releaseYear"
              value={formData.releaseYear}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Platform
            </label>
            <select
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="netflix">Netflix</option>
              <option value="prime">Prime Video</option>
              <option value="disney">Disney+</option>
              <option value="hbo">HBO Max</option>
              <option value="apple">Apple TV+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fragman URL
            </label>
            <input
              type="url"
              name="trailerUrl"
              value={formData.trailerUrl}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Poster URL
            </label>
            <input
              type="url"
              name="posterUrl"
              value={formData.posterUrl}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Yönetmen
            </label>
            <input
              type="text"
              name="director"
              value={formData.director}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Oyuncular (virgülle ayırın)
            </label>
            <input
              type="text"
              name="cast"
              value={formData.cast}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Açıklama
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push('/admin/content/manage')}
            className="px-6 py-2 rounded-md border hover:bg-gray-100"
          >
            İptal
          </button>
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
          >
            İçerik Ekle
          </button>
        </div>
      </form>
    </div>
  );
}