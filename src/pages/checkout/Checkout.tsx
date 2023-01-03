
import { EnderecoForms } from "./components/EnderecoForms/EnderecoForms";
import { PaymentForms } from "./components/Payment/PaymentForms";
import { Container, TitleBlack } from "./style";

export function Checkout() {
    return (
        <Container>

            <section>
                <TitleBlack>Complete seu pedido</TitleBlack>

                {/* Endereço */}
                <EnderecoForms/>
                

                {/* Forma de pagamento */}
               <PaymentForms/>
            </section>
        </Container>
    )
}