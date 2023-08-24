import React from 'react';
import {Head, Html, Main, NextScript} from "next/document";

const Document = () => {
    return (
        <Html lang="fr">
            <Head>
                <link rel="icon" href="/Logo.ico" />
                <title>Portfolio - Di Ilio Louis</title>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
};

export default Document;