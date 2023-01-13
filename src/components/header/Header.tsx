
import logoCoffe from "../../assets/coffe-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Badge, CartLogo, Location, HeaderLayout, LocationAndCartContainer, CartAjust } from "./styled"
import { useNavigate } from "react-router-dom"
import { useCoffe } from "../../context/CoffeContext/useCoffe"
import { useEffect, useState } from "react"
import { SnackBarMUI } from "../SnackBar/SnakBarMUI"

export function Header() {

    const history = useNavigate()

    const { coffeItenDetails } = useCoffe()

    const [quantCoff, setQuantCoffe] = useState<number>(0)

    const [snackBarStatus, setSnackBarStatus] = useState(false)
    const [colorSnackBar, setColorSnackBar] = useState('')
    const [menssageSnakeBar, setMessageSnakeBar] = useState('')

    useEffect(()=>{

        const valueQuantIten = coffeItenDetails.map((coffe)=>{
            return coffe.quant
        })

        setQuantCoffe(valueQuantIten.reduce((total, valores) => {return total + valores}, 0))
        

    },[coffeItenDetails])

    function handleRedirectHome(){
        history("")
    }

    
    function handleHistoryCheckout(url: string){

        if(coffeItenDetails.length === 0){
            setSnackBarStatus(true)
            setMessageSnakeBar("É necessário adicionar algum item ao carrinho para prosseguir")
            setColorSnackBar("#F75A68")

            setTimeout(()=>{
                setSnackBarStatus(false)
            }, 3000)
        }else{
            
            history(`/${url}`)
        }
    }
    return (
        <HeaderLayout>
             <SnackBarMUI color={colorSnackBar} message={menssageSnakeBar} open={snackBarStatus} onClose={() => setSnackBarStatus(false) }/>

            <div onClick={handleRedirectHome}>
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