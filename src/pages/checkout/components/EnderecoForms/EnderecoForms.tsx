import { MapPin } from "phosphor-react";
import { BaseInput, ContainerForm, FormEndereco, IconColor, IconTitle, Subtitle, Title, TitleBlack } from "./Style";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useCoffe } from "../../../../context/CoffeContext/useCoffe";

const newEnderecoCoffeSchema = zod.object({
    cep: zod.number().min(1, "informar o cep"),
    rua: zod.string().min(1,"informar a rua"),
    numero: zod.string().min(1,"Informar o n° da residência"),
    complemento: zod.string(),
    bairro: zod.string().min(1,"Informar nome do bairro"),
    cidade: zod.string().min(1,"Informe o nome da cidade"),
    uf: zod.string().min(1, "Informe o UF do estado"),
})

type newEnderecoFormData = zod.infer<typeof newEnderecoCoffeSchema>

export function EnderecoForms() {

    const { CreateEnderecoForms } = useCoffe()

    const { register, handleSubmit } = useForm<newEnderecoFormData>({
        resolver: zodResolver(newEnderecoCoffeSchema),
        defaultValues:{
            rua:"",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            uf:""
        }
    })

    function handleCreateEndereco(data:newEnderecoFormData){
        CreateEnderecoForms(data)
       
    }

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

                <FormEndereco onBlur={handleSubmit(handleCreateEndereco)}>

                    <BaseInput 
                        width="12.5rem" 
                        type="text" 
                        id="cep" 
                        placeholder="Cep" 
                        {...register('cep', {valueAsNumber: true, required:true})}
                    
                    
                    
                    />

                    <BaseInput 
                        width="100%"   
                        type="text" 
                        id="rua" 
                        placeholder="Rua" 
                        {...register('rua', {required:true})}
                    />

                    <BaseInput
                        width="12.5rem" 
                        type="text" 
                        id="numero" 
                        placeholder="Número" 
                        {...register('numero',{required:true}) }
                    />

                    <BaseInput 
                        width="21.75rem" 
                        type="text" 
                        id="complemento" 
                        placeholder="Complemento" 
                        {...register('complemento')}
                    />

                    <BaseInput 
                        width="12.5rem" 
                        type="text" 
                        id="bairro" 
                        placeholder="Bairro"
                        {...register('bairro', {required:true})}
                    />

                    <BaseInput 
                        width="17.25rem"
                        type="text" 
                        id="cidade" 
                        placeholder="Cidade"
                        {...register('cidade', {required:true})}
                     />

                    <BaseInput 
                        width="3.75rem" 
                        type="text" 
                        id="uf" 
                        placeholder="UF"
                        {...register('uf', {required:true})}
                    />

                </FormEndereco>
            </ContainerForm>
        </div>
    )
}