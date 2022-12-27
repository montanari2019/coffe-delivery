import { Header } from "../components/header/Header";
import { Outlet } from "react-router-dom"
import { MarginContainer } from "./styled";

export function DefaultLayout() {
    return (
        <div>
            <MarginContainer>
                <Header />
                <Outlet />
            </MarginContainer>

        </div>
    )
}