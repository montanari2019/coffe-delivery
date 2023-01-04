import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import ilustracao from "../../assets/succes-ilustration.png"
import { ButtonHome, CardList, CardSucces, CardSuccesAjust, Container, Icon, ImagenIlustracao, TitleBlack } from "./styled"

export function Sucess() {

    const history = useNavigate()

    function redirectRoute(url:string){
        history(`/${url}`)
    }
    return (
        <Container>

            <div>
                <TitleBlack>Uhu! Pedido confirmado</TitleBlack>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <ButtonHome onClick={()=>redirectRoute("")}>Voltar para a home</ButtonHome>

                <CardSucces>

                    <CardSuccesAjust>
                        <CardList>
                            <Icon colorIcon="purple"><MapPin size={15} weight="fill" /></Icon>
                            <div>
                                <p>Entrega em <strong> Rua João Daniel Martinelli, 102</strong></p>
                                <p>Farrapos - Porto Alegre, RS</p>
                            </div>
                        </CardList>

                        <CardList>
                            <Icon colorIcon="yellow"><Timer size={15} weight="fill" /></Icon>
                            <div>
                                <p>Previsão de entrega</p>
                                <strong>20 min - 30 min</strong>
                            </div>
                        </CardList>

                        <CardList>
                            <Icon colorIcon="yellowDark"><CurrencyDollar  size={15} weight="fill" /></Icon>
                            <div>
                                <p>Entrega em <strong> Rua João Daniel Martinelli, 102</strong></p>
                                <strong>Cartão de Crédito</strong>
                            </div>
                        </CardList>

                    </CardSuccesAjust>
                </CardSucces>
            </div>

            <div>
                <ImagenIlustracao src={ilustracao}/>
            </div>
        </Container>

    )
}