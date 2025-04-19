'use client';
import CustomLogo from "@/components/custom-logo";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-2">
      <main className="flex flex-col items-center w-full px-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Giriş Yap</h1>
        
        <button 
          onClick={() => router.push('/login-dmivb')}
          className="flex items-center gap-2 w-full max-w-sm p-3 mb-4 border rounded-lg hover:bg-gray-50"
        >
          <div className="scale-[0.65] -ml-6">
            <CustomLogo />
          </div>
          <span className="flex-grow text-center pr-4">DMIVb ile giriş yap</span>
        </button>

        <div className="flex items-center justify-center w-full max-w-sm mb-4">
          <div className="border-t w-full mr-4" />
          <span className="text-gray-500 whitespace-nowrap">ya da</span>
          <div className="border-t w-full ml-4" />
        </div>

        <button className="flex items-center gap-2 w-full max-w-sm p-3 mb-4 border rounded-lg hover:bg-gray-50">
          <div className="flex items-center justify-center w-8 h-8">
            <img src="/icons/google.svg" alt="Google" className="w-8 h-8" />
          </div>
          <span className="flex-grow text-center">Google ile giriş yap</span>
        </button>

        <button 
          onClick={() => router.push('/register')}
          className="w-full max-w-sm p-3 mb-4 bg-yellow-500 rounded-lg hover:bg-yellow-600 font-semibold"
        >
          Yeni bir hesap oluştur.
        </button>
        <p className="text-sm text-gray-600">
        Giriş yaparak, DMIVb'nin{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Kullanım Şartları
          </a>{' '}
          ve{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Gizlilik Politikası
          </a>
          'nı kabul etmiş olursunuz.
        </p>
      </main>
    </div>
  );
}