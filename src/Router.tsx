import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Success } from "./pages/Success";
import { Home } from "./pages/Home";
import { Payment } from "./pages/Payment";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/success" element={<Success />} />
            </Route>
        </Routes>
    )
}