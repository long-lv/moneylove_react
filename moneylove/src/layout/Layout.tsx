import Footer from "./component/Footer";
import Header from "./component/Header";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { router } from "~/routes";
const Layout = () => {
    const routers = createBrowserRouter(router)
    return (
        <>
            <Header></Header>
            {
                <RouterProvider router={routers} />
            }
            <Footer></Footer>
        </>
    )
}

export default Layout;