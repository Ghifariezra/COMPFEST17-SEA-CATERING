"use client";

import { useEffect, useState } from "react";

interface User {
    full_name: string;
    email: string;
}

export function useCheckAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await fetch("/api/user");
                const data = await res.json();
                setIsLoggedIn(data?.isLoggedIn || false);
                if (data?.user) setUser(data.user);
            } catch {
                setIsLoggedIn(false);
                setUser(null);
            }
        }

        checkAuth();
    }, []);

    return { isLoggedIn, user };
}
