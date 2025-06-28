import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { createSubscription } from "@/app/service/subscription";
import prisma from "@/prisma/prisma";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req: Request) {
    try {
        const cookieStore = cookies();
        const token = (await cookieStore).get("token")?.value;

        if (!token) {
            return NextResponse.json({ success: false, error: "Unauthorized. No token found." }, { status: 401 });
        }

        // Verifikasi token
        const { payload } = await jwtVerify(token, secret);

        // Cast ke number dan validasi
        const user_id = Number(payload.id);
        if (!user_id || isNaN(user_id)) {
            return NextResponse.json({ success: false, error: "Invalid token payload." }, { status: 400 });
        }


        const user = await prisma.users.findUnique({ where: { id: user_id } });
        if (!user) {
            return NextResponse.json({ success: false, error: "User not found." }, { status: 404 });
        }

        const body = await req.json();

        const subscription = createSubscription({ ...body, user_id });

        return NextResponse.json({ success: true, data: subscription });
    } catch (error) {
        console.error("Error creating subscription:", error);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
}
