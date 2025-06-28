// app/api/me/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET() {
    const cookieStore = cookies();
    const token = (await cookieStore).get("token")?.value;

    if (!token) {
        return NextResponse.json({ isLoggedIn: false }, { status: 200 });
    }

    try {
        const { payload } = await jwtVerify(token, secret);

        return NextResponse.json(
            {
                isLoggedIn: true,
                user: {
                    id: payload.id,
                    email: payload.email,
                    full_name: payload.full_name,
                    role: payload.role,
                },
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("[JWT_VERIFY_ERROR]", err);
        return NextResponse.json({ isLoggedIn: false }, { status: 200 });
    }
}
