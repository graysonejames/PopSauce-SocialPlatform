import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>PopSauce</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>PopSauce</h1>
            {/* Header */}
            <Header />

            {/* Modal */}

            {/* Feed */}
        </div>
    );
};

export default Home;
