import { ItensHome } from "../ItensHome/ItensHome";
import { CoffesDetails } from "../../../../utils/Coffes"
import { ContainerListItem,Container, Filter, FilterItem, SectionTitleAndFilter, TitleMenu, FilterClearItem } from "./styled";
import { useEffect, useState } from "react";
import { CoffeIten } from "../ItensHome/@types";
import { Funnel } from "phosphor-react";


export function ItensList() {
    const [coffesDetailsAux, setCoffesDetailsAux] = useState<CoffeIten[]>([])

    useEffect(()=>{
        setCoffesDetailsAux(CoffesDetails)
    },[CoffesDetails])

    function handleCoffeFilter(value: string){

        if(value === "initial"){
            setCoffesDetailsAux(CoffesDetails)

        }else{
            const coffeNewAux = CoffesDetails.filter((element)=> element.category.find(element => element.toLocaleLowerCase() === value.toLocaleLowerCase()))

            setCoffesDetailsAux(coffeNewAux)
        }
    }

    return (
        <Container>

            <SectionTitleAndFilter>
                <TitleMenu>Nossos cafés</TitleMenu>

                <Filter>

                    <FilterItem onClick={() =>handleCoffeFilter('Tradicional')} type="button">Tradicional</FilterItem>
                    <FilterItem onClick={() =>handleCoffeFilter('Com leite')} type="button">Com leite</FilterItem>
                    <FilterItem onClick={() =>handleCoffeFilter('alcoólico')} type="button">alcoólico</FilterItem>
                    <FilterItem onClick={() =>handleCoffeFilter('gelado')} type="button">gelado</FilterItem>
                    <FilterClearItem onClick={() =>handleCoffeFilter('initial')} type="button"><Funnel size={20} weight="fill" /></FilterClearItem>
                </Filter>

            </SectionTitleAndFilter>
           
     

                <ContainerListItem>

                    {coffesDetailsAux.map((key) => {
                        return <ItensHome key={key.id} item={CoffesDetails[key.id - 1]} />
                    })}
                </ContainerListItem>
           



        </Container>
    )
}