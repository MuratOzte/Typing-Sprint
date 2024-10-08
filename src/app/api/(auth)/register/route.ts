import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        if (!data.email || !data.password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: 'Email already in use' },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const token = jwt.sign(
            {
                id: data.id,
                email: data.email,
                name: data.name,
            },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        const newUser = await prisma.user.create({
            data: {
                name: data.name || 'Anonymous',
                email: data.email,
                password: hashedPassword,
                token: token,
            },
        });
        await prisma.userStats.create({
            data: {
                highestScore: 0,
                totalTypedWords: 0,
                totalTrueWords: 0,
                totalFalseWords: 0,
                totalRun: 0,
                userId: newUser.id,
                totalWPM: 0,
            },
        });

        return NextResponse.json({
            message: 'User registered successfully',
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
                createdAt: newUser.createdAt,
                updatedAt: newUser.updatedAt,
                token: newUser.token,
            },
        });
    } catch (error) {
        console.error('Error in register POST handler:', error);
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 500 }
        );
    }
}
