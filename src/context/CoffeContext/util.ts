import { CoffeItenContext, EnderecoContext } from "./@types";

export function SetSessionStorageCoffe(coffe: CoffeItenContext[] | null){
    sessionStorage.setItem("@ignite:coffe", JSON.stringify(coffe))
}

export function SetSessionStorageEndereco(enderecoForms:EnderecoContext | null){
    sessionStorage.setItem("@ignite:enForms", JSON.stringify(enderecoForms))
}

export function SetSessionStoragePaymentMethod(payment:string | null ){
    sessionStorage.setItem("@ignite:paymentMethod", JSON.stringify(payment))
}

export function GetItemSessionStorage(type: "coffe" | "enForms" | "paymentMethod"){
    
    if(type === "enForms"){
        const EnForms = sessionStorage.getItem('@ignite:enForms')
        return EnForms ? JSON.parse(EnForms) : null

    }
    
    else{
        const PaymentMethod = sessionStorage.getItem('@ignite:paymentMethod')
        return PaymentMethod ? JSON.parse(PaymentMethod) : null
    }
}