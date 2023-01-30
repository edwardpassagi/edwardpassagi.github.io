import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Typed from "react-typed";

import icon from "../../public/logo-light.svg";
import burger from "../../public/burger.svg";
import codingFrame from "../../public/coding-frame.svg";
import edward from "../../public/3d-model.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Edward Passagi</title>
        <meta name="description" content="Edward Passagi Portofolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-light.svg" />
      </Head>
      <main className="bg-bg_white">
        <section className="flex flex-col h-screen mx-6">
          <nav className="flex mt-14 bg-div_white py-2 rounded-xl justify-between shadow-sm">
            <div className="flex ml-2.5">
              {/* icon code */}
              <Image src={icon} width={30} />
              <h1 className="my-auto text-xl font-bebas [font-weight:400] text-black tracking-widest ml-2">
                Edward Passagi
              </h1>
            </div>
            <a href="#">
              <Image src={burger} width={30} className="mr-2.5" />
            </a>
          </nav>

          <div className="relative mt-12 py-40">
            <div className="absolute left-1/2 transform -translate-x-1/2 p-1 bg-gradient-to-r from-dark_grey_gradient to-white_gradient w-80 rounded-xl">
              <Image
                src={codingFrame}
                width={340}
                alt={"Coding Frame"}
                className=""
              />
            </div>
            <div className="absolute z-10 left-1/2 transform -translate-x-1/2 -mt-24 ml-12 w-60">
              <Image
                src={edward}
                width={300}
                alt={"Edward 3D Model"}
                className=""
              />
            </div>
          </div>
          <div className="grid-row grid gap-1 font-mark text-black mt-24 tracking-tighter font-black">
            <h2 className="text-2xl">Hello, there!</h2>
            <h1 className="text-3xl">I&apos;m Edward</h1>
            <h1 className="text-3xl">
              A{" "}
              <span className="text-dark_orange text-opacity-0 bg-gradient-to-r from-dark_orange to-light_orange bg-clip-text">
                <Typed
                  strings={[
                    "Software Engineer",
                    "UIUC MCS Grad",
                    "Fast Learner",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </h1>
          </div>
          <div className="flex justify-center mt-14">
            <button className="py-2 px-10 font-bebas [font-weight:400] tracking-[0.2em] bg-yankees_blue text-white rounded-xl">
              VIEW PROJECTS
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
