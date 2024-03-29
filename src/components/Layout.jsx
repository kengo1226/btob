import React from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({children}) {
    return (
        <>
        <Head>
            <title>BtoB企業サイト</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}

export default Layout