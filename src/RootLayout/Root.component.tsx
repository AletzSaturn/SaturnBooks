import { useState } from "react";
import { Outlet } from "react-router-dom";
import TopNavBar from "../top-navbar/components/top-navbar";

//This Root Layout is in charge of rendering the children of the routes.
//Also renders the TopNavBar, since it is necessary on whole app
export default function RootLayout() {
    const [showNavBar, setShowNavBar] = useState<boolean>(false);

    const handleShowNavBar = () => {
        setShowNavBar(!showNavBar);
        console.log(showNavBar)
    }

    return (
        <>
            <TopNavBar showNavBar={showNavBar} handleShowNavBar={handleShowNavBar} />
            <div className={showNavBar ? 'blurred-content' : ''}>
                <Outlet />
            </div>
        </>
    );
}