import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeContextProps, CoffeItenContext } from "./@types";
import { GetSessionStorage, SetSessionStorage } from "./util";

export const CoffeContext = createContext({} as CoffeContextProps)


interface ContextProps{
    children: ReactNode
}

export function CoffeContextComponent({ children }: ContextProps){

    const [coffeItenDetails, setCoffeItenDetails] = useState<CoffeItenContext[]>([])
    const coffesSessionStorage:CoffeItenContext[] = GetSessionStorage()

    useEffect(()=>{

        if(coffeItenDetails.length === 0 && coffesSessionStorage !== null ){
          
            console.log(coffesSessionStorage)
            
            setCoffeItenDetails(coffesSessionStorage)
            // console.log("Teste primeiro if")
        }else{
            console.log("Teste if")
            // console.log(coffeItenDetails)
            // console.log("segundo if")
            SetSessionStorage(coffeItenDetails)
            
        }
        
    },[coffeItenDetails])



    async function createShoppingCart(iten: CoffeItenContext){
        console.log(iten)

        await setCoffeItenDetails((state) => [...state, iten])
        
    }

    return(
        <CoffeContext.Provider value={{ coffeItenDetails, createShoppingCart }}>
            {children}
        </CoffeContext.Provider>
    )
}