import { cookies } from "next/headers";

export async function checkLoginAdmin(): Promise<{ id: number; email: string; role: string } | null> {
    try {
        // Ambil cookie session/token (misal: "token" atau "session")
        const cookieStore = cookies();
        const token = (await cookieStore).get("token")?.value;

        if (!token) return null;

        // Panggil API user dengan absolute URL (SSR)
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
        const res = await fetch(`${baseUrl}/api/user`, {
            headers: { Cookie: `token=${token}` },
            cache: "no-store",
        });
        const data = await res.json();

        if (data?.isLoggedIn && data.user) {
            return data.user; // { id, email, role }
        }
        return null;
    } catch (err) {
        console.error("Failed to check login", err);
        return null;
    }
}