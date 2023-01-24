import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { ActionTypes, createShoppingCartCoffeAction, deleteAllShoppingCoffe, removeItenShoppingCoffeAction, updateQuantShoppingCoffeAction } from "../../reducers/Coffes/actions";
import { CoffeReducer } from "../../reducers/Coffes/CoffeReducer";
import { CoffeContextProps, CoffeItenContext, EnderecoContext } from "./@types";
import { GetItemSessionStorage, SetSessionStorageCoffe, SetSessionStorageEndereco, SetSessionStoragePaymentMethod } from "./util";

export const CoffeContext = createContext({} as CoffeContextProps)


interface ContextProps {
    children: ReactNode
}



export function CoffeContextComponent({ children }: ContextProps) {

    const [coffeItenDetails, dispatch] = useReducer( CoffeReducer, [])

    const [enderecoForms, setEnderecoForms] = useState<EnderecoContext>()
    const [paymentMethod, setPaymentMethod] = useState<string>("")
    const enFormsSessionStorage: EnderecoContext = GetItemSessionStorage("enForms")
    const paymentMethodSessionStorge: string = GetItemSessionStorage("paymentMethod")


    useEffect(() => {

        if (enderecoForms === undefined && enFormsSessionStorage !== null) {
            setEnderecoForms(enFormsSessionStorage)

        } else {
            if (enderecoForms !== undefined) {
                SetSessionStorageEndereco(enderecoForms)
            }
        }

    }, [enderecoForms]),

    useEffect(() => {

            if (paymentMethod === "" && paymentMethodSessionStorge !== null) {
                setPaymentMethod(paymentMethodSessionStorge)

            } else {
                SetSessionStoragePaymentMethod(paymentMethod)
            }

    }, [paymentMethod])


    async function CreateShoppingCart(iten: CoffeItenContext) {

        dispatch(createShoppingCartCoffeAction(iten))

    }

    function UpdateQuantityIten(id: number, type: "Decrease" | "Increase") {

        dispatch(updateQuantShoppingCoffeAction(id, type))

    }

    function DeleteItenShoppingCart(id: number) {

        dispatch(removeItenShoppingCoffeAction(id))

    }

    function DeleteAllShoppingCart() {
        dispatch(deleteAllShoppingCoffe())

    }




    function CreateEnderecoForms(data: EnderecoContext) {
        setEnderecoForms(data)
    }

    function CreatePaymentMethod(data: string) {

        setPaymentMethod(data)
    }

    function CleanStorage(){
        SetSessionStorageEndereco(null)
        SetSessionStoragePaymentMethod(null)
    }

    return (
        <CoffeContext.Provider value={{ coffeItenDetails, enderecoForms, paymentMethod, CleanStorage ,CreateShoppingCart, DeleteItenShoppingCart, DeleteAllShoppingCart, UpdateQuantityIten, CreateEnderecoForms, CreatePaymentMethod }}>
            {children}
        </CoffeContext.Provider>
    )
}