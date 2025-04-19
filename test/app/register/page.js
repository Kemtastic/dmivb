'use client';
import { useState } from 'react';
import CustomLogo from "@/components/custom-logo";
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rePassword: ''
  });
  
  const [isVerificationStep, setIsVerificationStep] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form doğrulama ve gönderme işlemleri burada yapılabilir
    setIsVerificationStep(true);
  };

  if (isVerificationStep) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <div className="w-full max-w-[350px] p-5 rounded-lg">
          <div className="mb-4 flex justify-center">
            <CustomLogo />
          </div>
          
          <h1 className="text-2xl font-bold mb-6 text-center">E-posta adresini doğrula</h1>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              E-postanı doğrulamak için, {' '}
              <span className="font-medium">{formData.email}</span> adresine bir Tek Kullanımlık Şifre (OTP) gönderdik
            </p>

            <div>
              <label className="block text-sm font-medium mb-1">Güvenlik kodunu gir</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            
            <button className="w-full bg-yellow-400 text-black font-medium py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors">
              DMIVb hesabını oluştur
            </button>

            <button 
              className="w-full text-blue-600 hover:underline text-sm"
              onClick={() => {/* Kodu yeniden gönder */}}
            >
              Kodu yeniden gönder
            </button>
          </div>
          
          <div className="mt-4 pt-4 text-xs text-gray-600">
            DMIVb hesabı oluşturarak, DMIVb'nin{' '}
            <a href="#" className="text-blue-600 hover:underline">Kullanım Koşullarını</a>
            {' '}kabul etmiş olursunuz
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-md p-6">
        <div className="mb-6 flex justify-center">
          <CustomLogo />
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300">
          <h1 className="text-2xl font-bold mb-6">Hesap Oluştur</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Adınız
                </label>
                <input
                  type="text"
                  placeholder="Ad ve soyadınız"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  E-posta
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Şifre
                </label>
                <input
                  type="password"
                  placeholder="en az 8 karakter"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                  minLength={8}
                />
                <div className="flex items-center mt-1 text-sm text-gray-600">
                  <span className="inline-block mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </span>
                  Şifre en az 8 karakter olmalıdır.
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Şifreyi tekrar girin
                </label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.rePassword}
                  onChange={(e) => setFormData({...formData, rePassword: e.target.value})}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded"
              >
                DMIVb hesabı oluştur
              </button>
            </div>
          </form>

          <div className="mt-4 pt-4 border-t text-sm">
            <p>
              Zaten hesabınız var mı?{' '}
              <Link href="/login-dmivb" className="text-blue-600 hover:underline">
                Giriş yap
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}