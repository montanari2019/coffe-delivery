import { Minus, Plus, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCoffe } from "../../../../context/CoffeContext/useCoffe";
import { CoffesDetails } from "../../../../utils/Coffes";
import { CardCoffeSelct, TitleBlack, CardCoffeItem, ImageCoffe, DisplayButtonAndName, NameCoffe, ButtonsQuant, DisplayButton, BaseButton, ButtonRemove, CardTotalizer, TotalizerItem, Totalizer, ButoonConfirm, TitleNotItem } from "./Style";

export function ShoppingCart() {
    const history = useNavigate()

    const { coffeItenDetails } = useCoffe()

    const [coffeItenDetailsAux, setcoffeItenDetailsAux] = useState(coffeItenDetails)

    const [totalizerItens, setTotalizerItens] = useState<number>(0)


    function redirectRoute(url: string) {
        history(`/${url}`)
    }

    useEffect(() => {

        const totalizerItensArray = coffeItenDetails.map((state) => {
            return (state.quant * state.price)
        })
        const totalizerItens = totalizerItensArray.reduce((total, value) => { return total + value }, 0)

        setTotalizerItens(totalizerItens)

    }, [coffeItenDetails])


    return (
        <div>
            <TitleBlack>Cafés selecionados</TitleBlack>

            <CardCoffeSelct>

                {coffeItenDetails.length === 0 ? <TitleNotItem>Não existe itens no carrinho</TitleNotItem> : <></>}

                {coffeItenDetails.map((coffe) => {
                    return (
                        <CardCoffeItem key={coffe.price + coffe.quant}>
                            <ImageCoffe src={coffe.cover} />
                            <DisplayButtonAndName>
                                <NameCoffe>{coffe.name}</NameCoffe>
                                <ButtonsQuant>

                                    <DisplayButton>
                                        <BaseButton><Minus size={15} weight="bold" /></BaseButton>
                                        <p>{coffe.quant}</p>
                                        <BaseButton><Plus size={15} weight="bold" /></BaseButton>
                                    </DisplayButton>
                                    <ButtonRemove><Trash color="#8047F8" size={15} />remover</ButtonRemove>
                                </ButtonsQuant>



                            </DisplayButtonAndName>


                            <p>{((coffe.price) * (coffe.quant)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        </CardCoffeItem>
                    )
                })}

                {/* <pre>
                    <code>{JSON.stringify(coffeItenDetails, null, 2)}</code>
                </pre> */}




                <CardTotalizer>
                    <TotalizerItem>
                        <p>Total de itens</p>
                        <p>R$29,70</p>
                    </TotalizerItem>

                    <TotalizerItem>
                        <p>Entrega</p>
                        <p>R$3,50</p>
                    </TotalizerItem>

                    <Totalizer>
                        <strong>Total</strong>
                        <strong>{totalizerItens.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
                    </Totalizer>

                    <ButoonConfirm onClick={() => redirectRoute('Sucess')}>Confirmar Pedido</ButoonConfirm>
                </CardTotalizer>


            </CardCoffeSelct>

        </div>
    )
}