import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Header} from "@/modules/components/Header";
import React from "react";
import {Footer} from "@/modules/components/Footer";
import Head from 'next/head';
import {OurPresence} from "@/modules/components/OurPresence";
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';

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
        <Head>
            <meta name="robots" content="index, follow"/>
        </Head>
        <body className={inter.className}>
        <main className="main-styles">
            <Header/>
            {children}
            <OurPresence/>
            <Footer/>
        </main>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}