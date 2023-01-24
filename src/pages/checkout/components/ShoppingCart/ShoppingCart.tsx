import { Minus, Plus, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCoffe } from "../../../../context/CoffeContext/useCoffe";
import { CardCoffeSelct, TitleBlack, CardCoffeItem, ImageCoffe, DisplayButtonAndName, NameCoffe, ButtonsQuant, DisplayButton, BaseButton, ButtonRemove, CardTotalizer, TotalizerItem, Totalizer, ButoonConfirm, TitleNotItem } from "./Style";

export function ShoppingCart() {

    const history = useNavigate()

    const { coffeItenDetails, paymentMethod, enderecoForms , DeleteItenShoppingCart , UpdateQuantityIten, DeleteAllShoppingCart  } = useCoffe()

    const [totalizerItens, setTotalizerItens] = useState<number>(0)

    const [disableButton, setdisableButton] = useState(false)

    useEffect(()=>{
    
        if(coffeItenDetails.length > 0 && paymentMethod !== '' && enderecoForms !== undefined){
            
            setdisableButton(false)

        }else{
            setdisableButton(true)
        }

    },[coffeItenDetails, paymentMethod, enderecoForms])


    useEffect(() => {

        if(coffeItenDetails.length > 0){
            const totalizerItensArray = coffeItenDetails.map((state) => {
                return (state.quant * state.price)
            })
            const totalizerItens = totalizerItensArray.reduce((total, value) => { return total + value }, 0)
    
            setTotalizerItens(totalizerItens)
    
        }else{
            history("/")
        }


       
    }, [coffeItenDetails])

    function handleConfirmPedido(url: string){
        DeleteAllShoppingCart()
        history(`/${url}`)
    }


    function handleDeleteItem(id: number){
        DeleteItenShoppingCart(id)
    }

    function handleUpdateQuantityIten(id: number, type: "Decrease" | "Increase"){
        UpdateQuantityIten(id, type)
    }

   

    


    return (
        <div>
            <TitleBlack>Cafés selecionados</TitleBlack>

            <CardCoffeSelct>

                

                {coffeItenDetails.map((coffe) => {
                    return (
                        <CardCoffeItem key={coffe.id + coffe.name}>
                            <ImageCoffe src={coffe.cover} />
                            <DisplayButtonAndName>
                                <NameCoffe>{coffe.name}</NameCoffe>
                                <ButtonsQuant>

                                    <DisplayButton>
                                        <BaseButton disabled={coffe.quant === 1 ? true : false} onClick={()=> handleUpdateQuantityIten(coffe.id, "Decrease")}><Minus size={15} weight="bold" /></BaseButton>
                                            <p>{coffe.quant}</p>
                                        <BaseButton  onClick={()=> handleUpdateQuantityIten(coffe.id, "Increase")} ><Plus size={15} weight="bold" /></BaseButton>
                                    </DisplayButton>
                                    <ButtonRemove onClick={()=> handleDeleteItem(coffe.id)}><Trash color="#8047F8" size={15} />remover</ButtonRemove>
                                    
                                </ButtonsQuant>



                            </DisplayButtonAndName>


                            <p>{((coffe.price) * (coffe.quant)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        </CardCoffeItem>
                    )
                })}

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

                    <ButoonConfirm disabled={disableButton} onClick={() => handleConfirmPedido('Sucess')}>Confirmar Pedido</ButoonConfirm>
                </CardTotalizer>


            </CardCoffeSelct>

               {/* <pre>
                    <code>{JSON.stringify(coffeItenDetails, null, 2)}</code>
                </pre> */}

        </div>
    )
}