import Head from "next/head";

import { Inter } from "next/font/google";
import { SectionHome } from "@/components/SectionHome";
import { SectionInfo } from "@/components/SectionInfo";
import { SectionPrograms } from "@/components/SectionPrograms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SectionHome />
        <SectionInfo />
        <SectionPrograms />
      </main>
    </>
  );
}
