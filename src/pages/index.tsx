import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Edward Passagi Portofolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-gradient-to-b from-blue-700 to-blue-400">
        <section>
          <div className="h-screen flex items-center justify-center">
            <a
              className="bg-white px-8 py-8 inline-block rounded-xl text-5xl"
              href="#"
            >
              Edward Passagi
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
