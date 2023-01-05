import { useContext } from "react";
import { CoffeContext } from "./CoffeContext";

export function useCoffe(){
    const context = useContext(CoffeContext)

    return context
}