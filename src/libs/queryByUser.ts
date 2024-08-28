import clientPromise from './db';

export async function queryUserByEmail(email: string) {
    const client = await clientPromise;
    const db = client.db(); // Default DB name from URI
    const user = await db.collection('users').findOne({ email });

    return user;
}
