import { CoffeItenContext, EnderecoContext } from "./@types";



export function SetSessionStorageEndereco(enderecoForms:EnderecoContext | null){
    sessionStorage.setItem("EnForms", JSON.stringify(enderecoForms))
}

export function SetSessionStoragePaymentMethod(payment:string | null ){
    sessionStorage.setItem("PaymentMethod", JSON.stringify(payment))
}

export function GetItemSessionStorage(type: "Coffe" | "EnForms" | "PaymentMethod"){
    
    if(type === "EnForms"){
        const EnForms = sessionStorage.getItem('EnForms')
        return EnForms ? JSON.parse(EnForms) : null
    }else{
        const PaymentMethod = sessionStorage.getItem('PaymentMethod')
        return PaymentMethod ? JSON.parse(PaymentMethod) : null
    }
}