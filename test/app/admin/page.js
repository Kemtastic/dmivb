export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">İçerik İstatistikleri</h2>
          <div className="space-y-2">
            <p>Toplam Film: 0</p>
            <p>Toplam Dizi: 0</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Kullanıcı İstatistikleri</h2>
          <div className="space-y-2">
            <p>Toplam Kullanıcı: 0</p>
            <p>Bugün Katılan: 0</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Etkileşim İstatistikleri</h2>
          <div className="space-y-2">
            <p>Toplam Yorum: 0</p>
            <p>Toplam Puan: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
}