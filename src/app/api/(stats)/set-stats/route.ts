import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const requestBody = await req.json();
        console.log('deneme', requestBody);

        const currentStats = await prisma.userStats.findUnique({
            where: {
                id: requestBody.id,
            },
        });

        const newHighestScore =
            requestBody.highestScore > (currentStats?.highestScore || 0)
                ? requestBody.highestScore
                : currentStats?.highestScore;

        const stats = await prisma.userStats.update({
            where: {
                id: requestBody.id,
            },
            data: {
                totalTrueWords: {
                    increment: requestBody.totalTrueWords,
                },
                totalFalseWords: {
                    increment: requestBody.totalFalseWords,
                },
                totalTypedWords: {
                    increment: requestBody.totalTypedWords,
                },
                totalRun: {
                    increment: 1,
                },
                highestScore: newHighestScore,
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
