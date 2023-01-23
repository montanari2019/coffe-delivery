import { CoffeItenContext, EnderecoContext } from "./@types";

export function SetSessionStorageCoffe(iten: CoffeItenContext[] | null){
    sessionStorage.setItem("Coffe", JSON.stringify(iten))
}

export function GetSessionStorage(){
    const data = sessionStorage.getItem('coffes')
    return data ? JSON.parse(data) : null
}

export function SetSessionStorageEndereco(enderecoForms:EnderecoContext | null){
    sessionStorage.setItem("EnForms", JSON.stringify(enderecoForms))
}

export function SetSessionStoragePaymentMethod(payment:string | null ){
    sessionStorage.setItem("PaymentMethod", JSON.stringify(payment))
}

export function GetItemSessionStorage(type: "Coffe" | "EnForms" | "PaymentMethod"){
    if(type === "Coffe"){
        const coffe = sessionStorage.getItem('Coffe')
        return coffe ? JSON.parse(coffe) : null
    }else if(type === "EnForms"){
        const EnForms = sessionStorage.getItem('EnForms')
        return EnForms ? JSON.parse(EnForms) : null
    }else{
        const PaymentMethod = sessionStorage.getItem('PaymentMethod')
        return PaymentMethod ? JSON.parse(PaymentMethod) : null
    }
}