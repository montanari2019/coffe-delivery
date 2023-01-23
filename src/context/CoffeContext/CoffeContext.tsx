import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { CoffeContextProps, CoffeItenContext, EnderecoContext } from "./@types";
import { GetItemSessionStorage, GetSessionStorage, SetSessionStorageCoffe, SetSessionStorageEndereco, SetSessionStoragePaymentMethod } from "./util";

export const CoffeContext = createContext({} as CoffeContextProps)


interface ContextProps {
    children: ReactNode
}



export function CoffeContextComponent({ children }: ContextProps) {

    const [coffeItenDetails, dispatch] = useReducer((state: CoffeItenContext[], action: any) => {



        if (action.type === "CREATE_SHOPPING_CART_COFFE") {

            let verifyDuplicity: boolean = false

            for (let index = 0; index < state.length; index++) {
                if (state[index].id === action.payload.iten.id) {
                    verifyDuplicity = true
                    break

                } else {

                    verifyDuplicity = false
                }
            }

            if (verifyDuplicity === true) {

                const newCoffes = state.map((coffe) => {
                    console.log("item: ", action.payload.iten.quant)
                    if (coffe.id === action.payload.iten.id) {
                        return { ...coffe, quant: coffe.quant + action.payload.iten.quant }
                    } else {

                        return coffe
                    }
                })

                console.log("New coffes: ", [...newCoffes])

                return [...newCoffes]

            } else {

                return [...state, action.payload.iten]

            }



        }
        else if (action.type === "UPDATE_SHOPING_CART_COFFE") {
            if (action.payload.typeIten === "Decrease") {
                const newListCoffeDecrese:CoffeItenContext[] = state.map((index) => {
                    if (index.id === action.payload.idIten) {
                        if (index.quant > 0) {
                            return { ...index, quant: index.quant - 1 }
                        } else {

                            return index
                        }


                    } else {
                        return index
                    }
                })

                const verifyListCoffeQuantZero:CoffeItenContext[] = newListCoffeDecrese.filter((element) => element.quant !== 0)

                return [...verifyListCoffeQuantZero]
            } else {

                const newListCoffeIncrease:CoffeItenContext[] = state.map((index) => {
                    if (index.id === action.payload.idIten) {
                        return { ...index, quant: index.quant + 1 }
                    } else {
                        return index
                    }
                })

                return [...newListCoffeIncrease]

            }
        }
        else if(action.type === "REMOVE_SHOPING_CART_COFFE"){
            const coffesFilter:CoffeItenContext[] = state.filter((element)=> element.id !== action.payload.idIten)
            return [...coffesFilter]
        }
        else if(action.type === "DELETE_ALL_SHOPING_CART_COFFE"){
            return []
        }

        return state

    }, [])






    const [enderecoForms, setEnderecoForms] = useState<EnderecoContext>()
    const [paymentMethod, setPaymentMethod] = useState<string>("")
    const enFormsSessionStorage: EnderecoContext = GetItemSessionStorage("EnForms")
    const paymentMethodSessionStorge: string = GetItemSessionStorage("PaymentMethod")


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

        dispatch({
            type: "CREATE_SHOPPING_CART_COFFE",
            payload: {
                iten: iten
            }
        })



    }

    function UpdateQuantityIten(id: number, type: "Decrease" | "Increase") {

        dispatch({
            type: "UPDATE_SHOPING_CART_COFFE",
            payload: {
                idIten: id,
                typeIten: type

            }
        })

    }

    function DeleteItenShoppingCart(id: number) {

        dispatch({
            type: "REMOVE_SHOPING_CART_COFFE",
            payload: {
                idIten: id,

            }
        })

    }

    function DeleteAllShoppingCart() {
        dispatch({
            type: "DELETE_ALL_SHOPING_CART_COFFE",
        })
       
    }

 

    function CreateEnderecoForms(data: EnderecoContext) {
        setEnderecoForms(data)
    }

    function CreatePaymentMethod(data: string) {

        setPaymentMethod(data)
    }

    return (
        <CoffeContext.Provider value={{ coffeItenDetails, enderecoForms, paymentMethod, CreateShoppingCart, DeleteItenShoppingCart, DeleteAllShoppingCart, UpdateQuantityIten, CreateEnderecoForms, CreatePaymentMethod }}>
            {children}
        </CoffeContext.Provider>
    )
}