import { Header } from "../components/header/Header";
import { Outlet } from "react-router-dom"
import { HeaderContainer } from "./styled";

export function DefaultLayout() {
    return (
        <div>
            <HeaderContainer>
                <Header />
                <Outlet />
            </HeaderContainer>
        </div>
    )
}