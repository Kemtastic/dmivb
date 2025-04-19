'use client';
import CustomLogo from "@/components/custom-logo";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginDMIVbPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'user') {
      localStorage.setItem('userType', 'user');
      // Login event'ini tetikle
      window.dispatchEvent(new Event('loginChange'));
      router.push('/');
    } else if (username === 'admin' && password === 'admin') {
      localStorage.setItem('userType', 'admin');
      // Login event'ini tetikle
      window.dispatchEvent(new Event('loginChange'));
      router.push('/');
    } else {
      alert('Geçersiz kullanıcı adı veya şifre!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-[350px] p-5 rounded-lg">
        <div className="mb-4 flex justify-center">
          <CustomLogo />
        </div>
        
        <h1 className="text-2xl font-bold mb-6 text-center">Giriş yap</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Kullanıcı Adı</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium">Şifre</label>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <a href="/forgot-pass" className="text-sm text-blue-600 hover:underline">Şifremi unuttum</a>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-yellow-400 text-black font-medium py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors">
            Giriş yap
          </button>
          
          <div className="flex items-center mt-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm">Oturumumu açık tut</label>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-gray-600 mb-4">DMIVb'de yeni misiniz?</p>
          <button 
            onClick={() => router.push('/register')}
            className="w-full border border-gray-300 text-black font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            DMIVb hesabı oluştur
          </button>
        </div>
      </div>
    </div>
  );
}