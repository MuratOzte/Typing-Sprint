import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const user = await prisma.user.findFirst({
        where: {
            name: 'Alice',
        },
    });

    return NextResponse.json({ asd: user });
}