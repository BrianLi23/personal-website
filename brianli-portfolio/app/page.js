import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function Home() {
  return (
    /* */
    <div className="font-nexa">
      <Head>
        <title>Brian Li's Portfolio</title>
        <meta name="description" content="Generated by ajdsfkk"></meta>
        <link rel="icon" herf="/favicon.ico" sizes="any" />
      </Head>

      <main className="bg-yellow-100 px-10">
        <section className="min-h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <h1 className="font-nexa text-xl">Personal Portfolio</h1>
            <ul className="font-nexa flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-yellow-500">Brian Li</h2>
            <h3 className="text-2xl py-2">Developer, Student, Learner</h3>
            <p>Nah let me cook</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          <div className="rounded-full w-80 h-80">
            <Image src={"/facepic.jpg"} width={300} height={300} />
          </div>
        </section>
      </main>
    </div>
  );
}