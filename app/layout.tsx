import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Header} from "@/modules/Header";
import React from "react";
import {Footer} from "@/modules/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "The Elevator Company",
    description: "The Elevator Company India",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className="main-styles">
            <Header/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>
    );
}