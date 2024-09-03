import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { ObjectId } from 'mongodb'; // MongoDB'den ObjectId sınıfını import edin

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
    
    const user = await prisma.userStats.create({
        data: {
            accuracy: 0,
            averageScore: 0,
            highestScore: 0,
            totalTypedWords: 0,
            userId: '66d5c97f25e735eb88601e87',
        },
    });

    return NextResponse.json({ asd: user });
}
