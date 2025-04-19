"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const router = useRouter();
    const [userType, setUserType] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [userProfile, setUserProfile] = useState({
        name: 'Kullanıcı Adı',
        email: 'email@example.com',
        bio: '',
        location: '',
        joinDate: '19 Nisan 2025',
        socialLinks: {
            twitter: '',
            instagram: '',
            linkedin: '',
            github: ''
        },
        preferences: {
            emailNotifications: true,
            darkMode: false,
            language: 'Türkçe'
        }
    });

    useEffect(() => {
        const storedUserType = localStorage.getItem('userType');
        if (!storedUserType) {
            router.push('/login-dmivb');
            return;
        }
        setUserType(storedUserType);
    }, [router]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }
    };

    const handleSaveProfile = () => {
        setIsEditing(false);
        // API çağrısı simülasyonu
        alert('Profil bilgileri başarıyla güncellendi!');
    };

    const handleImageUpload = () => {
        if (selectedImage) {
            alert('Profil fotoğrafı başarıyla güncellendi!');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-xl p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-yellow-500">Profil</h1>
                    <button 
                        onClick={() => setIsEditing(!isEditing)}
                        className="bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-400"
                    >
                        {isEditing ? 'Düzenlemeyi İptal Et' : 'Profili Düzenle'}
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sol Bölüm - Profil Fotoğrafı ve Temel Bilgiler */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full bg-yellow-500 flex items-center justify-center overflow-hidden">
                                    {previewUrl ? (
                                        <img 
                                            src={previewUrl} 
                                            alt="Profile" 
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-black" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                {isEditing && (
                                    <label htmlFor="profile-image" className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                        </svg>
                                        <input
                                            type="file"
                                            id="profile-image"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                )}
                            </div>
                            {selectedImage && isEditing && (
                                <button
                                    onClick={handleImageUpload}
                                    className="mt-4 bg-yellow-500 text-black font-bold px-4 py-2 rounded hover:bg-yellow-400"
                                >
                                    Fotoğrafı Kaydet
                                </button>
                            )}
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-yellow-500 text-sm font-medium mb-1">Kullanıcı Tipi</h3>
                            <p className="text-white text-lg">{userType}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-yellow-500 text-sm font-medium mb-1">Üyelik Başlangıç Tarihi</h3>
                            <p className="text-white text-lg">{userProfile.joinDate}</p>
                        </div>
                    </div>

                    {/* Orta Bölüm - Kişisel Bilgiler ve Biyografi */}
                    <div className="space-y-6 md:col-span-2">
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-yellow-500 text-sm font-medium mb-3">Kişisel Bilgiler</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-white text-sm">İsim</label>
                                    <input
                                        type="text"
                                        value={userProfile.name}
                                        onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                                        disabled={!isEditing}
                                        className="w-full bg-gray-700 text-white p-2 rounded mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-sm">E-posta</label>
                                    <input
                                        type="email"
                                        value={userProfile.email}
                                        onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                                        disabled={!isEditing}
                                        className="w-full bg-gray-700 text-white p-2 rounded mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-sm">Konum</label>
                                    <input
                                        type="text"
                                        value={userProfile.location}
                                        onChange={(e) => setUserProfile({...userProfile, location: e.target.value})}
                                        disabled={!isEditing}
                                        placeholder="Şehir, Ülke"
                                        className="w-full bg-gray-700 text-white p-2 rounded mt-1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-yellow-500 text-sm font-medium mb-3">Biyografi</h3>
                            <textarea
                                value={userProfile.bio}
                                onChange={(e) => setUserProfile({...userProfile, bio: e.target.value})}
                                disabled={!isEditing}
                                placeholder="Kendinizden bahsedin..."
                                rows="4"
                                className="w-full bg-gray-700 text-white p-2 rounded mt-1"
                            />
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-yellow-500 text-sm font-medium mb-3">Sosyal Medya Bağlantıları</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm">Twitter</label>
                                    <input
                                        type="text"
                                        value={userProfile.socialLinks.twitter}
                                        onChange={(e) => setUserProfile({
                                            ...userProfile,
                                            socialLinks: {...userProfile.socialLinks, twitter: e.target.value}
                                        })}
                                        disabled={!isEditing}
                                        placeholder="@kullaniciadi"
                                        className="w-full bg-gray-700 text-white p-2 rounded mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-sm">Instagram</label>
                                    <input
                                        type="text"
                                        value={userProfile.socialLinks.instagram}
                                        onChange={(e) => setUserProfile({
                                            ...userProfile,
                                            socialLinks: {...userProfile.socialLinks, instagram: e.target.value}
                                        })}
                                        disabled={!isEditing}
                                        placeholder="@kullaniciadi"
                                        className="w-full bg-gray-700 text-white p-2 rounded mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-sm">LinkedIn</label>
                                    <input
                                        type="text"
                                        value={userProfile.socialLinks.linkedin}
                                        onChange={(e) => setUserProfile({
                                            ...userProfile,
                                            socialLinks: {...userProfile.socialLinks, linkedin: e.target.value}
                                        })}
                                        disabled={!isEditing}
                                        placeholder="Profil URL"
                                        className="w-full bg-gray-700 text-white p-2 rounded mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-sm">GitHub</label>
                                    <input
                                        type="text"
                                        value={userProfile.socialLinks.github}
                                        onChange={(e) => setUserProfile({
                                            ...userProfile,
                                            socialLinks: {...userProfile.socialLinks, github: e.target.value}
                                        })}
                                        disabled={!isEditing}
                                        placeholder="Kullanıcı adı"
                                        className="w-full bg-gray-700 text-white p-2 rounded mt-1"
                                    />
                                </div>
                            </div>
                        </div>

                        {isEditing && (
                            <div className="flex justify-end mt-6">
                                <button
                                    onClick={handleSaveProfile}
                                    className="bg-yellow-500 text-black font-bold px-6 py-2 rounded hover:bg-yellow-400"
                                >
                                    Değişiklikleri Kaydet
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}