import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const requestBody = await req.json();
        console.log('requestBody:', requestBody);

        const currentLeaderboard = await prisma.leaderboard.findFirst({
            where: {
                userId: requestBody.id,
            },
        });

        if (currentLeaderboard && currentLeaderboard.wpm > requestBody.wpm) {
            return NextResponse.json(
                { leaderboard: currentLeaderboard },
                { status: 200 }
            );
        }

        const leaderboard = await prisma.leaderboard.upsert({
            create: {
                userId: requestBody.id,
                wpm: requestBody.wpm,
                userName: requestBody.userName,
            },
            update: {
                wpm: requestBody.wpm,
                userName: requestBody.userName,
            },
            where: {
                userId: requestBody.id,
            },
        });

        return NextResponse.json({ leaderboard: leaderboard });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
