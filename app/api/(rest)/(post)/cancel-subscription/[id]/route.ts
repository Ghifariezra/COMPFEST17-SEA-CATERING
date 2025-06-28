import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

type Props = {
  params: Promise<{ id: string }>;
};

export async function POST(req: NextRequest, props: Props) {
  const { params } = props;
  const { id } = await params;

  // Pastikan kolom status ada di tabel subscriptions
  await prisma.subscriptions.update({
    where: { id: Number(id) },
    data: { status: "cancelled" },
  });

  return NextResponse.json({ success: true, id });
}