import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeContextProps, CoffeItenContext, EnderecoContext } from "./@types";
import { GetItemSessionStorage, GetSessionStorage, SetSessionStorageCoffe, SetSessionStorageEndereco, SetSessionStoragePaymentMethod } from "./util";

export const CoffeContext = createContext({} as CoffeContextProps)


interface ContextProps {
    children: ReactNode
}

const enderecoDefaut = {
    cep: 999,
    rua: "string",
    numero:"string",
    complemento:"string",
    bairro:"string",
    cidade:"string",
    uf:"string"
}

export function CoffeContextComponent({ children }: ContextProps) {

    const [coffeItenDetails, setCoffeItenDetails] = useState<CoffeItenContext[]>([])
    const [enderecoForms, setEnderecoForms] = useState<EnderecoContext>()
    const [paymentMethod, setPaymentMethod] = useState<string>("")
    const coffesSessionStorage: CoffeItenContext[] = GetItemSessionStorage("Coffe")
    const enFormsSessionStorage: EnderecoContext = GetItemSessionStorage("EnForms")
    const paymentMethodSessionStorge: string = GetItemSessionStorage("PaymentMethod")

    useEffect(() => {

        if (coffeItenDetails.length === 0 && coffesSessionStorage !== null) {

          

            setCoffeItenDetails(coffesSessionStorage)

        } else {

            SetSessionStorageCoffe(coffeItenDetails)

        }

    }, [coffeItenDetails])

    useEffect(()=>{

        if(enderecoForms === undefined && enFormsSessionStorage !== null){
            setEnderecoForms(enFormsSessionStorage)

        }else{
            if(enderecoForms !== undefined){
                SetSessionStorageEndereco(enderecoForms)
            }
        }

    },[enderecoForms]),

    useEffect(()=>{

        if(paymentMethod === "" && paymentMethodSessionStorge !== null){
            setPaymentMethod(paymentMethodSessionStorge)

        }else{
            SetSessionStoragePaymentMethod(paymentMethod)
        }

    },[paymentMethod])

    function UpdateQuantityIten(id: number, type: "Decrease" | "Increase") {

        if (type === "Decrease") {
            const newListCoffeDecrese = coffeItenDetails.map((state) => {
                if (state.id === id) {
                    if (state.quant > 0) {
                        return { ...state, quant: state.quant - 1 }
                    } else {

                        return state
                    }


                } else {
                    return state
                }
            })

            const verifyListCoffeQuantZero = newListCoffeDecrese.filter((element) => element.quant !== 0)

            setCoffeItenDetails(verifyListCoffeQuantZero)
            // SetSessionStorage(verifyListCoffeQuantZero)
        } else {

            const newListCoffeIncrease = coffeItenDetails.map((state) => {
                if (state.id === id) {
                    return { ...state, quant: state.quant + 1 }
                }else {
                    return state
                }
            })

            setCoffeItenDetails(newListCoffeIncrease)
            // SetSessionStorage(newListCoffeIncrease)

        }



    }

    function DeleteItenShoppingCart(id: number) {
        const coffes: CoffeItenContext[] = GetSessionStorage()

        if (coffes !== null) {
            const newCoffes = coffes.filter((element) => element.id !== id)

            SetSessionStorageCoffe(newCoffes)
            setCoffeItenDetails(newCoffes)
        }

    }

    function DeleteAllShoppingCart(){
        setCoffeItenDetails([])
        SetSessionStorageCoffe(null)
    }

    async function CreateShoppingCart(iten: CoffeItenContext) {
      

        let verifyDuplicity: boolean = false

        for (let index = 0; index < coffeItenDetails.length; index++) {
            if (coffeItenDetails[index].id === iten.id) {
                verifyDuplicity = true
                break

            } else {

                verifyDuplicity = false
            }
        }

        if (verifyDuplicity === true) {
            const newCoffes = coffeItenDetails.map((coffe) => {
                if (coffe.id === iten.id) {

                    return { ...coffe, quant: coffe.quant + iten.quant }
                } else {
                    console.log("Nnehum item duplicado")
                    return coffe
                }
            })

            await setCoffeItenDetails(newCoffes)

        } else {

            await setCoffeItenDetails((state) => [...state, iten])
        }
    }

    function CreateEnderecoForms(data: EnderecoContext){
        setEnderecoForms(data)
    }

    function CreatePaymentMethod(data: string){
       
        setPaymentMethod(data)
    }

    return (
        <CoffeContext.Provider value={{ coffeItenDetails, enderecoForms, paymentMethod , CreateShoppingCart, DeleteItenShoppingCart, DeleteAllShoppingCart , UpdateQuantityIten, CreateEnderecoForms, CreatePaymentMethod }}>
            {children}
        </CoffeContext.Provider>
    )
}