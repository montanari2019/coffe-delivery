import { ItensHome } from "../ItensHome/ItensHome";
import { CoffesDetails } from "../../../../utils/Coffes"
import { ContainerListItem,Container, Filter, FilterItem, SectionTitleAndFilter, TitleMenu } from "./styled";


export function ItensList() {
    return (
        <Container>

            <SectionTitleAndFilter>
                <TitleMenu>Nossos cafés</TitleMenu>

                <Filter>

                    <FilterItem type="button">Tradicional</FilterItem>
                    <FilterItem type="button">Com leite</FilterItem>
                    <FilterItem type="button">alcoólico</FilterItem>
                    <FilterItem type="button">gelado</FilterItem>
                </Filter>

            </SectionTitleAndFilter>
           
     

                <ContainerListItem>

                    {CoffesDetails.map((key) => {
                        return <ItensHome key={key.id} item={CoffesDetails[key.id - 1]} />
                    })}
                </ContainerListItem>
           



        </Container>
    )
}