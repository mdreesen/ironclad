export type Invoice = {
    id: string;
    date: string;
    status: 'paid' | 'failed' | 'refunded'
    email: string;
    amount: number;
};

export type CreateInvoice = {
    description: string;
    qty: number;
    rate: number;
}