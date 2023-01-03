
import logoCoffe from "../../../public/coffe-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Badge, CartLogo, Location, HeaderLayout, LocationAndCartContainer, CartAjust } from "./styled"
import { useNavigate } from "react-router-dom"

export function Header() {

    const history = useNavigate()
    
    function handleHistoryCheckout(){
        history('/Checkout')
    }
    return (
        <HeaderLayout>

            <div>
                <img src={logoCoffe} alt="" />
            </div>


            <LocationAndCartContainer>
                <Location>
                    <MapPin size={25} weight="fill" />
                    <p>Porto Alegre, RS</p>
                </Location>

                <CartAjust>
                    <Badge>3</Badge>
                    <CartLogo onClick={handleHistoryCheckout}>
                        <ShoppingCart size={28} weight="fill" />
                    </CartLogo>
                </CartAjust>

            </LocationAndCartContainer>
        </HeaderLayout>
    )
}