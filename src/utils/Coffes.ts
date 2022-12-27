interface CoffeIten{
    id: number,
    name: string,
    category: string[],
    description: string,
    cover: string,
    price: number,
}

import cover01 from "../assets/Expresso_Tradicional.png"
import cover02 from "../assets/Expresso_Americano.png"
import cover03 from "../assets/Expresso_Cremoso.png"
import cover04 from "../assets/Expresso_Gelado.png"
import cover05 from "../assets/Cafe_com_Leite.png"
import cover06 from "../assets/Irlandes.png"
import cover07 from "../assets/Latte.png"
import cover08 from "../assets/Capuccino.png"
import cover09 from "../assets/Macchiato.png"
import cover10 from "../assets/Mocaccino.png"
import cover11 from "../assets/Chocolate_Quente.png"
import cover12 from "../assets/Cubano.png"
import cover13 from "../assets/Havaiano.png"
import cover14 from "../assets/Arabe.png"


export const CoffesDetails:CoffeIten[] = [
    {
        id: 1,
        category: ["Tradicional"],
        name: "expresso Tradicional",
        description: 'O tradicional café feito com água quente e grãos moídos',
        cover: cover01,
        price: 9.90
    },
    {
        id: 2,
        category: ["Tradicional",],
        name: "Expresso Americano",
        description: 'Expresso diluído, menos intenso que o tradicional',
        cover: cover02,
        price: 9.90
    },
    {
        id: 3,
        category: ["Tradicional",],
        name: "Expresso Cremoso",
        description: 'Café expresso tradicional com espuma cremosa',
        cover: cover03,
        price: 9.90
    },
    {
        id: 4,
        category: ["Tradicional", "gelado", "com leite", "com leite" ,"com leite"],
        name: "Expresso Gelado",
        description: 'Bebida preparada com café expresso e cubos de gelo',
        cover: cover04,
        price: 9.90
    },
    {
        id: 5,
        category: ["tradicional", "com leite"],
        name: "Café com Leite",
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        cover: cover05,
        price: 5.90
    },
    {
        id: 6,
        category: ["especial", "alcoólico"],
        name: "Irlandês",
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        cover: cover06,
        price: 15.90
    },
    {
        id: 7,
        category: ["tradicional", "com leite"],
        name: "Latte",
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        cover: cover07,
        price: 9.90
    },
    {
        id: 8,
        category: ["tradicional", "com leite"],
        name: "Capuccino",
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        cover: cover08,
        price: 15.85
    },
    {
        id: 9,
        category: ["tradicional", "com leite"],
        name: "Macchiato",
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        cover: cover09,
        price: 7.90
    },
    {
        id: 10,
        category: ["tradicional", "com leite"],
        name: "Mocaccino",
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        cover: cover10,
        price: 9.90
    },
    {
        id: 11,
        category: ["especial", "com leite"],
        name: "Chocolate Quente",
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        cover: cover11,
        price: 10.90
    },
    {
        id: 12,
        category: ["alcoólico", "especial", "gelado"],
        name: "Cubano",
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        cover: cover12,
        price: 9.90
    },
    {
        id: 13,
        category: ["especial"],
        name: "Havaiano",
        description: 'Bebida adocicada preparada com café e leite de coco',
        cover: cover13,
        price: 19.90
    },
    {
        id: 14,
        category: ["especial"],
        name: "Árabe",
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        cover: cover14,
        price: 12.90
    },

]