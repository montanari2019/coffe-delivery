export interface CoffeItenContext{
    id: number,
    name: string,
    category: string[],
    description: string,
    cover: string,
    price: number,
    quant: number
}

export interface CoffeContextProps{
    coffeItenDetails: CoffeItenContext[];
    createShoppingCart: (iten: CoffeItenContext) => Promise<void>;
}