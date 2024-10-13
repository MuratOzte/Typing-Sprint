import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const leaderBoard = await prisma.leaderboard.findMany({
            select: {
                userName: true,
                wpm: true,
                userId: true,
            },
            orderBy: { wpm: 'desc' },
            take: 10,
        });

        return NextResponse.json({ leaderboard: leaderBoard });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to process request' + error },
            { status: 500 }
        );
    }
}
