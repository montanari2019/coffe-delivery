import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useCoffe } from "../../../../context/CoffeContext/useCoffe";
import { ContainerForm, IconColor, IconTitle, PaymentButton, PaymentDisplay, Subtitle, Title } from "./Style";

export function PaymentForms() {

    const { CreatePaymentMethod } = useCoffe()


    function handlePaymentMethod(value:string){
        CreatePaymentMethod(value)
    }

    return (
        <ContainerForm>
            <IconTitle>
                <IconColor colorIcon="purple">
                    <CurrencyDollar size={32} />
                </IconColor>

                <div>
                    <Title>Pagamento</Title>
                    <Subtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Subtitle>
                </div>


            </IconTitle>

            <PaymentDisplay>
                <PaymentButton colorButton={"baseButton"} onClick={()=> handlePaymentMethod("Cartão de crédito")}><CreditCard color="#8047F8" size={20} />Cartão de crédito</PaymentButton>
                <PaymentButton colorButton={"baseButton"} onClick={()=> handlePaymentMethod("cartão de débito")}><Bank color="#8047F8" size={20} />cartão de débito</PaymentButton>
                <PaymentButton colorButton={"baseButton"} onClick={()=> handlePaymentMethod("dinheiro")}><Money color="#8047F8" size={20} />dinheiro</PaymentButton>
            </PaymentDisplay>

        </ContainerForm>

    )
}