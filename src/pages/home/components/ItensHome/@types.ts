export interface CoffeIten{
    id: number,
    name: string,
    category: string[],
    description: string,
    cover: string,
    price: number,
}

export interface ItenHomeProps{
    item: CoffeIten
}