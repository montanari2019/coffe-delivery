import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import { SnackBarMUI } from "../../../../components/SnackBar/SnakBarMUI";
import { useCoffe } from "../../../../context/CoffeContext/useCoffe";
import { ItenHomeProps } from "./@types";
import { ButtonCardDisplay, ButtonQuantidade, ButtonQuantidadeDisplay, CardCategory, CardCategoryDisplay, CardCoffeItem, DescriptionItem, ImagenCoffeItem, Price, ShoppingCartIcons, TitleItem } from "./styledHomeItens";


export function ItensHome({ item }: ItenHomeProps) {

    const { CreateShoppingCart } = useCoffe()

    const [quantItem, setQuantItem] = useState<number>(0);
    const [priceState, setPrice] = useState<number>(item.price)

    const [snackBarStatus, setSnackBarStatus] = useState(false)
    const [colorSnackBar, setColorSnackBar] = useState('')
    const [menssageSnakeBar, setMessageSnakeBar] = useState('')


    function handleClickQuantItem(value: number){
   
        if(value === 1){
            setQuantItem((state) => state + 1)



        }else if(value === -1 && quantItem > 0){
            setQuantItem((state) => state - 1)

        }
    }

    function handleAddItemShoppingCart(){
        if(quantItem === 0){
            setSnackBarStatus(true)
            setColorSnackBar('#F75A68')
            setMessageSnakeBar("Não é possível adicionar o item ao carrinho, pois a quantidade é zero")

            setTimeout(() => {
                setSnackBarStatus(false)
            }, 3000)

        }else{
            const iten = { ...item, quant: quantItem}
            CreateShoppingCart(iten)
            setQuantItem(0)


            setSnackBarStatus(true)
            setColorSnackBar('#8047F8')
            setMessageSnakeBar("Item adicionado com sucesso, para finalizar a compra, vá até seu carrinho")

            setTimeout(() => {
                setSnackBarStatus(false)
            }, 3000)
        }
       
        
    }

    useEffect(()=>{
        if(quantItem == 0){
            setPrice(item.price)
        }else{
            setPrice(item.price * quantItem)
        }
    },[quantItem])

 
    return (
        <div>

            <SnackBarMUI open={snackBarStatus}  color={colorSnackBar} message={menssageSnakeBar} onClose={()=> setSnackBarStatus(false)}/>


            <CardCoffeItem>
                <ImagenCoffeItem src={item.cover} />
                <CardCategoryDisplay>
                    {item.category.map((category) => {
                        return <CardCategory key={category}>{category}</CardCategory>

                    })}
                </CardCategoryDisplay>

                <TitleItem>{item.name}</TitleItem>
                <DescriptionItem>{item.description}</DescriptionItem>

                <ButtonCardDisplay>

                    <p><Price>{priceState.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Price></p>

                    <ButtonQuantidadeDisplay>
                        <ButtonQuantidade type="button" onClick={() => handleClickQuantItem(-1)}><Minus size={15} weight="bold" /> </ButtonQuantidade>
                        <p>{quantItem}</p>
                        <ButtonQuantidade type="button" onClick={() => handleClickQuantItem(1)}> <Plus size={15} weight="bold" /> </ButtonQuantidade>
                    </ButtonQuantidadeDisplay>

                    <ShoppingCartIcons  onClick={handleAddItemShoppingCart}>
                        <ShoppingCartSimple size={32} weight="fill" />
                    </ShoppingCartIcons>

                </ButtonCardDisplay>

            </CardCoffeItem>

            {/* <pre>
                <code>{JSON.stringify(item, null, 2)}</code>
            </pre> */}
        </div>
    )
}