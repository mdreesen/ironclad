export type Invoice = {
    id: string;
    date: string;
    status: 'paid' | 'failed' | 'refunded'
    email: string;
    amount: number;
}