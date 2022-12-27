import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { ItenHomeProps } from "./@types";
import { ButtonCardDisplay, ButtonQuantidade, ButtonQuantidadeDisplay, CardCategory, CardCategoryDisplay, CardCoffeItem, DescriptionItem, ImagenCoffeItem, Price, ShoppingCartIcons, TitleItem } from "./styledHomeItens";


export function ItensHome({ item }: ItenHomeProps) {
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

                    <p>R$<Price>{item.price}0</Price></p>

                    <ButtonQuantidadeDisplay>
                        <ButtonQuantidade type="button"><Minus size={15} weight="bold" /> </ButtonQuantidade>
                        <p>10</p>
                        <ButtonQuantidade type="button"> <Plus size={15} weight="bold" /> </ButtonQuantidade>
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