import imagemCoffe from "../../../../assets/Imagem-coffe.png"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { HeaderBackground, HeaderContainer, CardIcon, CardConatiner, Title, TitleAndContainer,CardDisplay, Imagen } from "./styledHeaderHome";
import { useCoffe } from "../../../../context/CoffeContext/useCoffe";

export function HeaderHome() {
    const { coffeItenDetails } = useCoffe()

    



    
    return (
        <div>
           
            <HeaderBackground>
            </HeaderBackground>

            

                <HeaderContainer>

                    <TitleAndContainer>
                        <div>
                            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                            <CardDisplay>
                                <CardConatiner>
                                    <CardIcon iconColor="yellow_Dark">
                                        <ShoppingCart size={15} weight="fill" />
                                    </CardIcon>
                                    <span>Compra simples e segura</span>
                                </CardConatiner>

                                <CardConatiner>
                                    <CardIcon iconColor="yellow">
                                        <Timer  size={15} weight="fill" />
                                    </CardIcon>
                                    <span>Entrega rápida e rastreada</span>
                                </CardConatiner>

                                <CardConatiner>
                                    <CardIcon iconColor="gray">
                                        <Package  size={15} weight="fill" />
                                    </CardIcon>
                                    <span>Embalagem mantém o café intacto</span>
                                </CardConatiner>

                                <CardConatiner>
                                    <CardIcon iconColor="purple">
                                        <Coffee  size={15} weight="fill" />
                                    </CardIcon>
                                    <span>O café chega fresquinho até você</span>
                                </CardConatiner>
                            </CardDisplay>

                        </div>

                        

                        <Imagen src={imagemCoffe} alt="" />

                    </TitleAndContainer>
                </HeaderContainer>


            
        </div>
    )
}