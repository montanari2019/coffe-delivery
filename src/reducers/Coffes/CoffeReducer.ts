import { Action } from "@remix-run/router"
import { CoffeItenContext } from "../../context/CoffeContext/@types"
import { ActionTypes } from "./actions"



export function CoffeReducer(state: CoffeItenContext[], action: any){


    switch (action.type) {
        case ActionTypes.CREATE_SHOPPING_CART_COFFE:
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

        case ActionTypes.UPDATE_SHOPING_CART_COFFE:
            if (action.payload.typeIten === "Decrease") {
                const newListCoffeDecrese: CoffeItenContext[] = state.map((index) => {
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

                const verifyListCoffeQuantZero: CoffeItenContext[] = newListCoffeDecrese.filter((element) => element.quant !== 0)

                return [...verifyListCoffeQuantZero]
            } else {

                const newListCoffeIncrease: CoffeItenContext[] = state.map((index) => {
                    if (index.id === action.payload.idIten) {
                        return { ...index, quant: index.quant + 1 }
                    } else {
                        return index
                    }
                })

                return [...newListCoffeIncrease]

            }


        case ActionTypes.REMOVE_ITEM_SHOPING_CART_COFFE:
            const coffesFilter: CoffeItenContext[] = state.filter((element) => element.id !== action.payload.idIten)
            return [...coffesFilter]


        case ActionTypes.DELETE_ALL_SHOPING_CART_COFFE:
            return []


        default:
            return state


    }
 
 

}