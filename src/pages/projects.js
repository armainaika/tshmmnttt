import Header from "../components/Header";
import Head from "next/head";
import "../app/globals.css";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>tshmmnt</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center h-[130vh]">
        <div className="text-6xl text-gray-600 font-bold text-center pt-20">
          <p>projects</p>
        </div>
        <div className="mx-10 flex flex-col justify-center mt-10 w-5/6 h-full">
          <div className="flex flex-row flex-grow w-full items-center justify-center">
            <Link
              className=" cursor-pointer flex text-center items-center justify-center h-4/5 w-full flex-grow mx-8 transition-all ease-in-out duration-300 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-red-500/50"
              href="/ipagen"
            >
              <div>
                <p className="p-2 text-6xl font-bold">
                  sathilian IPA generator
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-row flex-grow w-full items-center justify-center ">
            <Link
              className=" cursor-pointer flex text-center items-center justify-center h-4/5 w-full flex-grow mx-8 transition-all ease-in-out duration-300 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-red-500/50"
              href="/verbconj"
            >
              <div>
                <p className="p-2 text-6xl font-bold">
                  sathilian verb conjugator
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-row flex-grow w-full items-center justify-center ">
            <Link
              className=" cursor-pointer flex text-center items-center justify-center h-4/5 w-full flex-grow mx-8 transition-all ease-in-out duration-300 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-red-500/50"
              href="/nounsconj"
            >
              <div>
                <p className="p-2 text-6xl font-bold">
                  sathilian noun conjugator
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
