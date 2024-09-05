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

        const stats = await prisma.userStats.updateMany({
            where: {
                userId: requestBody.id,
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
