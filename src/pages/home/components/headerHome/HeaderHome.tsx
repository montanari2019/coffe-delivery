    import { ShoppingCart } from "phosphor-react";
    import { MarginContainer } from "../../../../layouts/styled";
    import { HeaderBackground, HeaderContainer, CardIcon, CardConatiner, Title } from "./styledHeaderHome";
    import imagemCoffe from "../../../../../public/Imagem-coffe.png"

    export function HeaderHome() {
        return (
            <div>
                <HeaderBackground>
                </HeaderBackground>

                <MarginContainer>

                    <HeaderContainer>

                        <div>
                            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                            <div>
                                <CardConatiner>
                                    <CardIcon>
                                        <ShoppingCart size={15} weight="fill" />
                                    </CardIcon>
                                    <span>Compra simples e segura</span>
                                </CardConatiner>

                                <CardConatiner>
                                    <CardIcon>
                                        <ShoppingCart size={15} weight="fill" />
                                    </CardIcon>
                                    <span>Compra simples e segura</span>
                                </CardConatiner>

                                <CardConatiner>
                                    <CardIcon>
                                        <ShoppingCart size={15} weight="fill" />
                                    </CardIcon>
                                    <span>Compra simples e segura</span>
                                </CardConatiner>
                            </div>
                        </div>
                        {/* <img src={imagemCoffe} alt="" /> */}
                    </HeaderContainer>


                </MarginContainer>
            </div>
        )
    }