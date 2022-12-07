
import logoCoffe from "../../../public/coffe-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Badge, CartLogo,Location , HeaderLayout, LocationAndCartContainer } from "./styled"

export function Header() {
    return (
        <HeaderLayout>

            <div>
                <img src={logoCoffe} alt="" />
            </div>


            <LocationAndCartContainer>
                <Location>
                    <MapPin size={25} />
                    <p>Porto Alegre, RS</p>
                </Location>

                <div>
                    {/* <Badge>3</Badge> */}
                    <CartLogo>
                        <ShoppingCart size={28} />
                    </CartLogo>
                </div>

            </LocationAndCartContainer>
        </HeaderLayout>
    )
}