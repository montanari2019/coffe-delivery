export interface CoffeItenContext{
    id: number,
    name: string,
    category: string[],
    description: string,
    cover: string,
    price: number,
    quant: number
}

export interface EnderecoContext{
    cep: number,
    rua: string,
    numero:string,
    complemento?:string,
    bairro:string,
    cidade:string,
    uf:string

}


export interface CoffeContextProps{
    coffeItenDetails: CoffeItenContext[];
    enderecoForms: EnderecoContext | undefined,
    paymentMethod: string | undefined,
    CreateShoppingCart: (iten: CoffeItenContext) => Promise<void>;
    DeleteItenShoppingCart: (id: number) => void;
    DeleteAllShoppingCart:() => void
    UpdateQuantityIten: (id: number, type:"Decrease" | "Increase") => void;
    CreateEnderecoForms:(data: EnderecoContext) => void
    CreatePaymentMethod: (data: string) =>void
}