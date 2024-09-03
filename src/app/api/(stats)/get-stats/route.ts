import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const requestBody = await req.json();
        const stats = await prisma.userStats.findFirst({
            where: {
                userId: requestBody.userId,
            },
        });

        return NextResponse.json({ stats: stats });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
