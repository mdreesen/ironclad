export type Payment = {
    id: string
    date: string
    status: 'paid' | 'failed' | 'refunded'
    email: string
    amount: number
}