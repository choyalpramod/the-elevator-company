import React from "react";
import {Logo} from "@/modules/components/Header/Logo"
import {Navigation} from "@/modules/components/Header/Navigation";

export const Header = () => {
    return (
        <header className="flex flex-col lg:flex-row justify-between items-center bg-black ">
            <Logo/>
            <Navigation/>
        </header>
    )
}
