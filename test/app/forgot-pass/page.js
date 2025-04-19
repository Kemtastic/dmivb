'use client';
import { useState } from 'react';
import CustomLogo from "@/components/custom-logo";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEmailSent(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-2">
      <div className="w-full max-w-md p-6">
        <div className="mb-6 flex justify-center">
          <CustomLogo />
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300">
          {!isEmailSent ? (
            <>
              <h1 className="text-2xl font-bold mb-4">Şifre yardımı</h1>
              
              <p className="text-sm text-gray-700 mb-4">
                DMIVb hesabınızla ilişkili e-posta adresini veya telefon numarasını girin.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta adresi veya telefon numarası
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded"
                >
                  Devam Et
                </button>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-4">E-posta gönderildi</h1>
              <p className="text-sm text-gray-700 mb-4">
                {email} adresine şifre sıfırlama talimatlarını içeren bir e-posta gönderdik. 
                Lütfen gelen kutunuzu kontrol edin.
              </p>
              <button
                onClick={() => setIsEmailSent(false)}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded"
              >
                Farklı bir e-posta dene
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}