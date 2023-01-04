import { Minus, Plus, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { CoffesDetails } from "../../../../utils/Coffes";
import { CardCoffeSelct, TitleBlack, CardCoffeItem, ImageCoffe, DisplayButtonAndName, NameCoffe, ButtonsQuant, DisplayButton, BaseButton, ButtonRemove, CardTotalizer, TotalizerItem, Totalizer, ButoonConfirm } from "./Style";

export function ShoppingCart(){
    const history = useNavigate()

    function redirectRoute(url:string){
        history(`/${url}`)
    }
    return(
        <div>
        <TitleBlack>Cafés selecionados</TitleBlack>

        <CardCoffeSelct>

            <CardCoffeItem>
                <ImageCoffe src={CoffesDetails[0].cover} />
                <DisplayButtonAndName>
                    <NameCoffe>{CoffesDetails[0].name}</NameCoffe>
                    <ButtonsQuant>

                        <DisplayButton>
                        <BaseButton><Minus size={15} weight="bold" /></BaseButton>
                        <p>1</p>
                        <BaseButton><Plus size={15} weight="bold" /></BaseButton>
                        </DisplayButton>
                        <ButtonRemove><Trash color="#8047F8" size={15} />remover</ButtonRemove>
                    </ButtonsQuant>
                    
                    

                </DisplayButtonAndName>


                <p>R$ 9,90</p>
            </CardCoffeItem>

            <CardCoffeItem>
                <ImageCoffe src={CoffesDetails[1].cover} />
                <DisplayButtonAndName>
                    <NameCoffe>{CoffesDetails[1].name}</NameCoffe>
                    <ButtonsQuant>

                        <DisplayButton>
                        <BaseButton><Minus size={15} weight="bold" /></BaseButton>
                        <p>2</p>
                        <BaseButton><Plus size={15} weight="bold" /></BaseButton>
                        </DisplayButton>
                        <ButtonRemove><Trash color="#8047F8" size={15} />remover</ButtonRemove>
                    </ButtonsQuant>
                    
                    

                </DisplayButtonAndName>


                <p>R$ 9,90</p>
            </CardCoffeItem>

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
                    <strong>R$3,50</strong>
                </Totalizer>

                <ButoonConfirm onClick={()=>redirectRoute('Sucess')}>Confirmar Pedido</ButoonConfirm>
            </CardTotalizer>


        </CardCoffeSelct>

    </div>
    )
}