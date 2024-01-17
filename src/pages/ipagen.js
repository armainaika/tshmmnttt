import Header from "../components/Header";
import Head from "next/head";
import "../app/globals.css";
import Link from "next/link";
import IpaGenerator from "../components/IpaGenerator";

export default function Ipagen() {
  return (
    <div>
      <Head>
        <title>ipa generator</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center h-full">
        <div className="mt-36 text-7xl font-bold">sathilian IPA generator</div>
        <IpaGenerator />
      </main>
    </div>
  );
}
