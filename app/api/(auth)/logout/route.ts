import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = cookies();

    // Hapus cookie token
    (await
        // Hapus cookie token
        cookieStore).set("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0), // Expire immediately
        sameSite: "lax",
    });

    // Redirect ke halaman utama (atau bisa diarahkan ke /login)
    return NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"));
}
