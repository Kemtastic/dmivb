"use client";

import Link from "next/link";
import CustomLogo from "./custom-logo";
import { ChevronDown } from "lucide-react";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavBar() {
    const pathname = usePathname();
    const [userType, setUserType] = useState(null);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // Define routes that should show simple navbar
    const simpleNavbarRoutes = [
        '/login',
        '/register',
        '/forgot-pass',
        '/login-dmivb'
    ];

    // Check if current route should show simple navbar
    const isSimpleNavbar = simpleNavbarRoutes.includes(pathname);

    // Show full navbar for all routes except those in simpleNavbarRoutes
    const isFullNavbar = !isSimpleNavbar;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserType = localStorage.getItem('userType');
            setUserType(storedUserType);
        }

        const handleStorageChange = (e) => {
            if (e.key === 'userType') {
                setUserType(e.newValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        const handleLoginChange = (e) => {
            setUserType(localStorage.getItem('userType'));
        };
        window.addEventListener('loginChange', handleLoginChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('loginChange', handleLoginChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userType');
        setUserType(null);
        window.location.href = '/login-dmivb';
    };

    const navLinks = [
        {
            title: "Filmler",
            href: "/movies",
            subLinks: [
                {
                    title: "Netflix",
                    href: "/movies/netflix"
                },
                {
                    title: "Prime Video",
                    href: "/movies/amazon"
                },
                {
                    title: "Apple TV+",
                    href: "/movies/apple"
                }
            ]
        },
        {
            title: "Diziler",
            href: "/series",
            subLinks: [
                {
                    title: "Netflix",
                    href: "/series/netflix"
                },
                {
                    title: "Prime Video",
                    href: "/series/amazon"
                },
                {
                    title: "HBO Max",
                    href: "/series/hbo"
                },
                {
                    title: "Disney+",
                    href: "/series/disney"
                }
            ]
        },
        {
            title: "Hakkımızda",
            href: "/about"
        }
    ];

    return (
        <>
            <nav className="bg-black py-4 px-4 md:px-8 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center">
                    <Link href="/">
                        <CustomLogo className="cursor-pointer hover:text-yellow-300 hover:drop-shadow-[0_0_15px_rgba(253,224,71,0.7)] transition-all duration-300" />
                    </Link>
                    {isFullNavbar && (
                        <div className="hidden md:flex space-x-8">
                            {navLinks.map((item, index) => (
                                <div key={index} className="relative group">
                                    <Link href={item.href} className="font-medium text-white flex items-center gap-1">
                                        {item.title}
                                        {item.subLinks && <ChevronDown className="w-4 h-4 ml-1" />}
                                    </Link>
                                    {item.subLinks && (
                                        <div className="absolute left-0 top-4 mt-2 w-48 bg-black rounded-md shadow-lg hidden group-hover:block z-10">
                                            <div className="p-4 space-y-2">
                                                {item.subLinks.map((subItem, subIndex) => (
                                                    <Link 
                                                        key={subIndex} 
                                                        href={subItem.href} 
                                                        className="block text-white hover:text-yellow-300"
                                                    >
                                                        {subItem.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {isFullNavbar && (
                    <div className="flex items-center">
                        <div className="relative mr-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-100 text-gray-800 rounded-full px-4 py-1 w-40 md:w-64"
                            />
                            <button className="absolute right-2 top-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                        {userType ? (
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <button 
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        className="flex items-center gap-2 bg-yellow-500 text-black font-bold px-4 py-1 rounded hover:bg-yellow-400"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        <span>{userType}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isUserMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg py-1 z-50">
                                            <Link href="/profile" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                                                Profiliniz
                                            </Link>
                                            {userType === 'admin' && (
                                                <Link href="/admin" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                                                    Admin Paneli
                                                </Link>
                                            )}
                                            <button 
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
                                            >
                                                Çıkış Yap
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <Link href="/login-dmivb">
                                <button className="bg-yellow-500 text-black font-bold px-4 py-1 rounded hover:bg-yellow-400 transform hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out">
                                    Giriş Yap
                                </button>
                            </Link>
                        )}
                    </div>
                )}
            </nav>
        </>
    );
}