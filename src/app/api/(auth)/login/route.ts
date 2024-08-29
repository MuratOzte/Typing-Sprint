import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST({
    req,
    res,
}: {
    req: NextRequest;
    res: NextResponse;
}) {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: (error as Error).message });
    }

    return NextResponse.json({ asd: 'Deneme' });
}
