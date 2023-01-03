import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { ContainerForm, IconColor, IconTitle, PaymentButton, PaymentDisplay, Subtitle, Title } from "./Style";

export function PaymentForms() {
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
                <PaymentButton><CreditCard color="#8047F8" size={20} />Cartão de crédito</PaymentButton>
                <PaymentButton><Bank color="#8047F8" size={20} />cartão de débito</PaymentButton>
                <PaymentButton><Money color="#8047F8" size={20} />dinheiro</PaymentButton>
            </PaymentDisplay>

        </ContainerForm>

    )
}