import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeContextProps, CoffeItenContext } from "./@types";
import { GetSessionStorage, SetSessionStorage } from "./util";

export const CoffeContext = createContext({} as CoffeContextProps)


interface ContextProps {
    children: ReactNode
}

export function CoffeContextComponent({ children }: ContextProps) {

    const [coffeItenDetails, setCoffeItenDetails] = useState<CoffeItenContext[]>([])
    const coffesSessionStorage: CoffeItenContext[] = GetSessionStorage()

    useEffect(() => {

        if (coffeItenDetails.length === 0 && coffesSessionStorage !== null) {

            console.log(coffesSessionStorage)

            setCoffeItenDetails(coffesSessionStorage)
          
        } else {
            
            SetSessionStorage(coffeItenDetails)

        }

    }, [coffeItenDetails])



    async function createShoppingCart(iten: CoffeItenContext) {
        console.log(iten)

        let verifyDuplicity:boolean = false

        for (let index = 0; index < coffeItenDetails.length; index++) {
            if (coffeItenDetails[index].id === iten.id) {
                verifyDuplicity = true
                break

            } else {

                verifyDuplicity = false
            }
        }

        if(verifyDuplicity === true){
            const newCoffes = coffeItenDetails.map((coffe) => {
                if (coffe.id === iten.id) {

                    return { ...coffe, quant: coffe.quant + iten.quant }
                } else {
                    console.log("Nnehum item duplicado")
                    return coffe
                }
            })

            await setCoffeItenDetails(newCoffes)

        }else{

            await setCoffeItenDetails((state) => [...state, iten])
        }
    }

        return (
            <CoffeContext.Provider value={{ coffeItenDetails, createShoppingCart }}>
                {children}
            </CoffeContext.Provider>
        )
    }