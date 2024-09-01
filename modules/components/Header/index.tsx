import React from "react";
import {Logo} from "@/modules/components/Header/Logo"
import {Navigation} from "@/modules/components/Header/Navigation";

export const Header = () => {
    return (
        <div className="flex justify-between items-center bg-black">
            <Logo/>
            <Navigation/>
        </div>
    )
}
