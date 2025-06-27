import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email dan password wajib diisi." },
                { status: 400 }
            );
        }

        const user = await prisma.users.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                password: true,
                full_name: true,
            },
        });

        console.log(user);

        if (!user) {
            return NextResponse.json(
                { error: "Akun tidak ditemukan." },
                { status: 404 }
            );
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch); // <-- Return False
        if (!passwordMatch) {
            return NextResponse.json(
                { error: "Email atau password salah." },
                { status: 401 }
            );
        }

        const token = await new SignJWT({
            id: user.id,
            email: user.email,
            full_name: user.full_name,
        })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("1h")
            .sign(secret);

        const cookieStore = cookies();
        (await cookieStore).set("token", token, {
            httpOnly: true,
            maxAge: 60 * 60, // 1 jam
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

        return NextResponse.json({
            success: true,
            message: "Login berhasil.",
        });
    } catch (error) {
        console.error("[LOGIN_ERROR]", error);
        return NextResponse.json(
            { error: "Terjadi kesalahan pada server." },
            { status: 500 }
        );
    }
}
