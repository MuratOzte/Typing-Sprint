import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const requestBody = await req.json();
        console.log('deneme', requestBody);

        const currentStats = await prisma.userStats.findFirst({
            where: {
                userId: requestBody.id,
            },
        });

        console.log('currentStats:', currentStats);

        if (currentStats?.id === null) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        if (!currentStats) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        const stats = await prisma.userStats.update({
            where: {
                id: currentStats.id,
            },
            data: {
                totalTrueWords: {
                    increment: requestBody.trueWord,
                },
                totalFalseWords: {
                    increment: requestBody.falseWord,
                },
                totalTypedWords: {
                    increment: requestBody.totalTypedWords,
                },
                totalRun: {
                    increment: 1,
                },
                highestScore: requestBody.score,
                totalWPM: {
                    increment: requestBody.score,
                },
            },
        });
        console.log('asdasd', stats);
        return NextResponse.json({ stats: stats });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
