
import { EnderecoForms } from "./components/EnderecoForms/EnderecoForms";
import { PaymentForms } from "./components/Payment/PaymentForms";
import { Container } from "./style";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";

export function Checkout() {
    return (
        <Container>

            <section>
                {/* Endereço */}
                <EnderecoForms />


                {/* Forma de pagamento */}
                <PaymentForms />
            </section>

            <section>
                <ShoppingCart />
            </section>
        </Container>
    )
}