import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Tailwind Gradients - Next.js</title>
                <meta
                    name={"description"}
                    content={"Generated by create next app"}
                />
                <meta
                    name={"viewport"}
                    content={"width=device-width, initial-scale=1"}
                />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>
            <main
                className={
                    "w-full h-screen bg-black overflow-hidden select-none"
                }
            >
                <div
                    className={
                        "relative flex justify-center items-center h-screen pb-8"
                    }
                >
                    <div
                        className={
                            "absolute w-120 h-80 rounded-full bg-gradient-to-br from-glare/0 to-glare/0.3 via-glare/0 blur-2xl -ml-96"
                        }
                    />

                    <h1
                        className={
                            "text-5xl font-black bg-gradient-to-r from-sky-700 to-cyan-800 via-teal-500 bg-clip-text text-transparent animate-text z-1"
                        }
                    >
                        Hello World!
                    </h1>

                    <div
                        className={
                            "absolute left-1/2 w-60 h-44 bg-gradient-radial from-glare-dark/0.4 to-glare/0 blur-2xl"
                        }
                    />
                </div>
            </main>
        </>
    );
};

export default Home;
