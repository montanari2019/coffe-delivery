import { Action } from "@remix-run/router"
import { CoffeItenContext } from "../../context/CoffeContext/@types"
import { ActionTypes } from "./actions"
import { produce } from "immer"


export function CoffeReducer(state: CoffeItenContext[], action: any) {


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


                const coffeIndex = state.findIndex((element) => element.id === action.payload.iten.id)

                if (coffeIndex < 0) {
                    return state
                }

                return produce(state, (draft) => {
                    draft[coffeIndex].quant = (draft[coffeIndex].quant + action.payload.iten.quant)
                })

            } else {


                return produce(state, (draft) => {
                    draft.push(action.payload.iten)
                })

            }

        case ActionTypes.UPDATE_SHOPING_CART_COFFE:
            if (action.payload.typeIten === "Decrease") {
          
                const coffeIndex = state.findIndex((element) => element.id === action.payload.idIten)
                if (coffeIndex < 0) {
                    return state
                }


                return produce(state, (draft) => {
                    if (draft[coffeIndex].quant > 1) {
                        draft[coffeIndex].quant = (draft[coffeIndex].quant - 1)
                    }
                })

            } else {

                const coffeIndex = state.findIndex((element) => element.id === action.payload.idIten)
                if (coffeIndex < 0) {
                    return state
                }


                return produce(state, (draft) => {
                    draft[coffeIndex].quant = (draft[coffeIndex].quant + 1)
                })


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