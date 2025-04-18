import Link from "next/link";
import CustomLogo from "./custom-logo";
import { ChevronDown } from "lucide-react";

export default function NavBar() {
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
    ]

    return (
        <>
            <nav className="bg-black py-4 px-4 md:px-8 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center">
                    <Link href="/">
                        <CustomLogo className="cursor-pointer hover:text-yellow-300 hover:drop-shadow-[0_0_15px_rgba(253,224,71,0.7)] transition-all duration-300" />
                    </Link>
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
                </div>

                {/* ...existing search and register buttons... */}
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
                    <button className="bg-yellow-500 text-black font-bold px-4 py-1 rounded">Register</button>
                </div>
            </nav>
        </>
    );
}