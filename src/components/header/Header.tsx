
import logoCoffe from "../../../public/coffe-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Badge, CartLogo, Location, HeaderLayout, LocationAndCartContainer, CartAjust } from "./styled"
import { useNavigate } from "react-router-dom"
import { useCoffe } from "../../context/CoffeContext/useCoffe"
import { useEffect, useState } from "react"

export function Header() {

    const history = useNavigate()

    const { coffeItenDetails } = useCoffe()

    const [quantCoff, setQuantCoffe] = useState<number>(0)

    useEffect(()=>{

        const valueQuantIten = coffeItenDetails.map((coffe)=>{
            return coffe.quant
        })

        setQuantCoffe(valueQuantIten.reduce((total, valores) => {return total + valores}, 0))
        

    },[coffeItenDetails])

    
    function handleHistoryCheckout(url: string){
        history(`/${url}`)
    }
    return (
        <HeaderLayout>

            <div onClick={()=> handleHistoryCheckout('')}>
                <img src={logoCoffe} alt="" />
            </div>


            <LocationAndCartContainer>
                <Location>
                    <MapPin size={25} weight="fill" />
                    <p>Porto Alegre, RS</p>
                </Location>

                <CartAjust>

                    {
                        quantCoff === 0 ? <></> : <Badge>{quantCoff}</Badge>
                    }
                    
                    <CartLogo onClick={() => handleHistoryCheckout("Checkout")}>
                        <ShoppingCart size={28} weight="fill" />
                    </CartLogo>
                </CartAjust>

            </LocationAndCartContainer>
            {/* <pre>
                <code>{JSON.stringify(coffeItenDetails, null, 2)}</code>
            </pre> */}
        </HeaderLayout>
    )
}