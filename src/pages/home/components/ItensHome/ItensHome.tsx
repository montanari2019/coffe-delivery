import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { ItenHomeProps } from "./@types";
import { ButtonCardDisplay, ButtonQuantidade, ButtonQuantidadeDisplay, CardCategory, CardCategoryDisplay, CardCoffeItem, DescriptionItem, ImagenCoffeItem, Price, ShoppingCartIcons, TitleItem } from "./styledHomeItens";


export function ItensHome({ item }: ItenHomeProps) {

    const [quantItem, setQuantItem] = useState<number>(0);

    const [valueConverted, setValueConverted] = useState<string>(item.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))

    function handleClickQuantItem(value: number){
        if(value === 1){
            setQuantItem((state) => state + 1)

          
            
            
        }else if(value === -1 && quantItem > 0){
            setQuantItem((state) => state - 1)

        }
    }


 
    return (
        <div>


            <CardCoffeItem>
                <ImagenCoffeItem src={item.cover} />
                <CardCategoryDisplay>
                    {item.category.map((category) => {
                        return <CardCategory>{category}</CardCategory>

                    })}
                </CardCategoryDisplay>

                <TitleItem>{item.name}</TitleItem>
                <DescriptionItem>{item.description}</DescriptionItem>

                <ButtonCardDisplay>

                    <p><Price>{valueConverted}</Price></p>

                    <ButtonQuantidadeDisplay>
                        <ButtonQuantidade type="button" onClick={() => handleClickQuantItem(-1)}><Minus size={15} weight="bold" /> </ButtonQuantidade>
                        <p>{quantItem}</p>
                        <ButtonQuantidade type="button" onClick={() => handleClickQuantItem(1)}> <Plus size={15} weight="bold" /> </ButtonQuantidade>
                    </ButtonQuantidadeDisplay>

                    <ShoppingCartIcons>
                        <ShoppingCartSimple size={32} weight="fill" />
                    </ShoppingCartIcons>

                </ButtonCardDisplay>

            </CardCoffeItem>

            {/* <pre>
                <code>{JSON.stringify(item, null, 2)}</code>
            </pre> */}
        </div>
    )
}