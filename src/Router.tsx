import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { NotFoundPage } from "./components/NotFondPage/NotFoundPage"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Checkout } from "./pages/checkout/Checkout"
import { Home } from "./pages/home/Home"
import { Sucess } from "./pages/sucess/Sucess"

export function Router() {
    return (

        <BrowserRouter>
            <Routes>
            <Route path="/404" element={<NotFoundPage />} />
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route path="/Sucess" element={<Sucess />} />

                    <Route path="*" element={<Navigate to={'/404'} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}