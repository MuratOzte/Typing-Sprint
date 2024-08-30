import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        // Parse JSON from the request body
        const data = await req.json();
        console.log(data);

        // Example: Use Prisma to interact with the database
        // const user = await prisma.user.create({
        //     data: { ... },
        // });

        return NextResponse.json({ message: 'Success', data: 'Deneme' });
    } catch (error) {
        console.error('Error in POST handler:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
