import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const requestBody = await req.json();

        const user = await prisma.user.findUnique({
            where: {
                id: requestBody.userId,
            },
        });

        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        const userLeaderboard = await prisma.leaderboard.findFirst({
            where: {
                userId: requestBody.userId,
            },
        });

        if (userLeaderboard) {
            await prisma.leaderboard.update({
                where: {
                    id: userLeaderboard.id,
                },
                data: {
                    wpm: requestBody.wpm,
                },
            });

            return NextResponse.json({ leaderboard: 'leaderboard' });
        }

        const leaderBoard = await prisma.leaderboard.create({
            data: {
                userId: requestBody.userId,
                wpm: requestBody.wpm,
            },
        });

        return NextResponse.json({ leaderboard: leaderBoard });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
