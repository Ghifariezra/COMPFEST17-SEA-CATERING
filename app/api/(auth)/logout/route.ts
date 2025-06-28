import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = cookies();

    // Hapus cookie
    (await
        // Hapus cookie
        cookieStore).set("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        sameSite: "lax",
    });

    // Kirim status sukses
    return NextResponse.json({ success: true });
}
