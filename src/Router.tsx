import { Routes, Route, BrowserRouter } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Checkout } from "./pages/checkout/Checkout"
import { Home } from "./pages/home/Home"
import { Sucess } from "./pages/sucess/Sucess"

export function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Checkout" element={<Checkout />} />
                    <Route path="/Sucess" element={<Sucess />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}