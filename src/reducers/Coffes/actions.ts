import { CoffeItenContext } from "../../context/CoffeContext/@types";

export enum ActionTypes {
    CREATE_SHOPPING_CART_COFFE = "CREATE_SHOPPING_CART_COFFE",
    UPDATE_SHOPING_CART_COFFE = "UPDATE_SHOPING_CART_COFFE",
    REMOVE_ITEM_SHOPING_CART_COFFE = "REMOVE_ITEM_SHOPING_CART_COFFE",
    DELETE_ALL_SHOPING_CART_COFFE = "DELETE_ALL_SHOPING_CART_COFFE"
}

export function createShoppingCartCoffeAction(newCoffe: CoffeItenContext){
    return{
        type: ActionTypes.CREATE_SHOPPING_CART_COFFE,
        payload: {
            iten: newCoffe
        }
    }
}

export function updateQuantShoppingCoffeAction(id: number, type: "Decrease" | "Increase"){
    return{
        type: ActionTypes.UPDATE_SHOPING_CART_COFFE,
        payload: {
            idIten: id,
            typeIten: type

        }
    }
}

export function removeItenShoppingCoffeAction(id: number){
    return{
        type: ActionTypes.REMOVE_ITEM_SHOPING_CART_COFFE,
        payload: {
            idIten: id,

        }
    }

}

export function deleteAllShoppingCoffe(){
    return {
        type: ActionTypes.DELETE_ALL_SHOPING_CART_COFFE,
    }
}