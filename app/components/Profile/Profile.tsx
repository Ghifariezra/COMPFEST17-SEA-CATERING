"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
    full_name: string;
    email: string;
}

interface AvatarMenuProps {
    user: User;
}

export default function AvatarMenu({ user }: AvatarMenuProps) {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/logout", {
                method: "GET",
                credentials: "include",
            });
    
            if (res.ok) {
                window.location.href = "/";
            } else {
                console.error("Logout failed", await res.text());
            }
        } catch (err) {
            console.error("Logout error:", err);
        }
    };
    

    const initials = user.full_name.charAt(0).toUpperCase();

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setShowMenu((prev) => !prev)}
                className="w-10 h-10 bg-gradient-to-br from-zinc-200 to-zinc-300 text-zinc-700 font-bold rounded-full flex items-center justify-center shadow-md hover:from-zinc-300 hover:to-zinc-400 hover:text-zinc-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 cursor-pointer"
                title={user.full_name}
                aria-haspopup="true"
                aria-expanded={showMenu}
            >
                {initials}
            </button>

            {showMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-zinc-200 rounded-xl shadow-xl z-50 animate-fade-in">
                    <div className="px-5 py-3 text-base font-medium text-zinc-700 border-b border-zinc-100 bg-zinc-50 rounded-t-xl">
                        Hello, {user.full_name}
                    </div>
                    <button
                        onClick={() => router.push("/user/dashboard")}
                        className="w-full text-left px-5 py-3 text-sm hover:bg-zinc-100 text-zinc-700 transition-colors duration-150 cursor-pointer"
                    >
                        Profile
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full text-left px-5 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150 rounded-b-xl cursor-pointer"
                    >
                        Logout
                    </button>
                </div>
            )}
            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-8px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in {
                    animation: fade-in 0.18s ease;
                }
            `}</style>
        </div>
    );
}
