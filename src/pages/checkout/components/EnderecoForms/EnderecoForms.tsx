import { MapPin } from "phosphor-react";
import { BaseInput, ContainerForm, FormEndereco, IconColor, IconTitle, Subtitle, Title, TitleBlack } from "./Style";

export function EnderecoForms() {
    return (
        <div>
            <TitleBlack>Complete seu pedido</TitleBlack>

            <ContainerForm>
                <IconTitle>
                    <IconColor colorIcon="yellow">
                        <MapPin size={32} />
                    </IconColor>

                    <div>
                        <Title>Endereço de Entrega</Title>
                        <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
                    </div>
                </IconTitle>

                <FormEndereco>
                    <BaseInput width="12.5rem" type="text" id="cep" placeholder="Cep" />
                    <BaseInput width="100%" type="text" id="rua" placeholder="Rua" />
                    <BaseInput width="12.5rem" type="text" id="numero" placeholder="Número" />
                    <BaseInput width="21.75rem" type="text" id="complementos" placeholder="Complemento" />
                    <BaseInput width="12.5rem" type="text" id="bairro" placeholder="Bairro" />
                    <BaseInput width="17.25rem" type="text" id="cidade" placeholder="Cidade" />
                    <BaseInput width="3.75rem" type="text" id="uf" placeholder="UF" />
                </FormEndereco>
            </ContainerForm>
        </div>
    )
}