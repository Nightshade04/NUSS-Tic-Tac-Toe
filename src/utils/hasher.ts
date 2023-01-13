import { createHmac } from 'crypto';

const KEY = process.env.ENCRYPTION_KEY!;

export const encrypt = (data: string) => {
    const hash = createHmac('sha256', `${KEY}`)
        .update(data)
        .digest('hex');
    return hash;
};
