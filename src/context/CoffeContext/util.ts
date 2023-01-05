import { CoffeItenContext } from "./@types";

export function SetSessionStorage(iten: CoffeItenContext[]){
    sessionStorage.setItem("coffes", JSON.stringify(iten))
}

export function GetSessionStorage(){
    const data = sessionStorage.getItem('coffes')
    return data ? JSON.parse(data) : null
}