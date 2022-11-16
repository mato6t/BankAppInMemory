export interface Transaction {
    id?: number,
    owner: string,
    category: string,
    isDebet: boolean,
    amount: number,
    sum: number
}