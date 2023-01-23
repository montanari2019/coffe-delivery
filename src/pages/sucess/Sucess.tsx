import ilustracao from "../../assets/succes-ilustration.png"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import { useCoffe } from "../../context/CoffeContext/useCoffe"
import { ButtonHome, CardList, CardSucces, CardSuccesAjust, Container, Icon, ImagenIlustracao, TitleBlack, InfoText } from "./styled"

export function Sucess() {

    const history = useNavigate()

    const {  enderecoForms, paymentMethod, ClearSessionStorage } = useCoffe()


    function redirectRoute(url:string){
        ClearSessionStorage()
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
                            <InfoText>
                                <p>Entrega em <strong> {enderecoForms?.rua}, {enderecoForms?.numero}</strong></p>
                                <p>{enderecoForms?.bairro} - {enderecoForms?.cidade}, {enderecoForms?.uf}</p>
                            </InfoText>
                        </CardList>

                        <CardList>
                            <Icon colorIcon="yellow"><Timer size={15} weight="fill" /></Icon>
                            <InfoText>
                                <p>Previsão de entrega</p>
                                <strong>20 min - 30 min</strong>
                            </InfoText>
                        </CardList>

                        <CardList>
                            <Icon colorIcon="yellowDark"><CurrencyDollar  size={15} weight="fill" /></Icon>
                            <InfoText>
                                <p>Pagamento na entrega</p>
                                <strong style={{textTransform: "capitalize"}}>{paymentMethod}</strong>
                            </InfoText>
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