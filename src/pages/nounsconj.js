import Header from "../components/Header";
import Head from "next/head";
import "../app/globals.css";
import Link from "next/link";
import { conjugateNoun } from "../api/NounConj"; // Adjust the path as needed
import React, { useState, useEffect, useRef } from "react";

export default function VerbConjugation() {
  const [noun, setNoun] = useState("");
  const [animacy, setAnimacy] = useState("animate");
  const [conjugation, setConjugation] = useState(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null); // Add a ref for the button element

  const handleConjugateClick = () => {
    const detectedType = conjugateNoun(noun, animacy); // Pass animacy as the second argument
    setConjugation(detectedType); // Store the entire conjugation object
  };

  const handleAnimacyChange = (e) => {
    setAnimacy(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Simulate a button click when Enter is pressed
      buttonRef.current.click();
    }
  };

  useEffect(() => {
    // Add an event listener for keydown on the input field
    const inputElement = inputRef.current;
    inputElement.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      inputElement.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>noun conjugator</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center h-full">
        <div className="mt-36 text-7xl font-bold">
          sathilian noun conjugator
        </div>
        <div className="flex flex-col font-mono mt-10 w-full items-center">
          <div className="flex flex-row">
            <input
              ref={inputRef}
              className="input-field border border-gray-300 p-2 text-white rounded bg-black"
              value={noun} // Ensure that the input value is controlled by React
              onChange={(e) => setNoun(e.target.value)} // Update the 'noun' state when input changes
            />
            <div className="flex flex-col items-start text-center ml-3">
              <div className="flex flex-row">
                <input
                  type="radio"
                  name="animacy"
                  value="animate"
                  id="animate"
                  checked={animacy === "animate"}
                  onChange={handleAnimacyChange}
                />
                <label className="mx-3" htmlFor="animate">
                  animate
                </label>
              </div>
              <div className="flex flex-row">
                <input
                  type="radio"
                  name="animacy"
                  value="nonanimate"
                  id="nonanimate"
                  checked={animacy === "nonanimate"}
                  onChange={handleAnimacyChange}
                />
                <label className="mx-3" htmlFor="nonanimate">
                  non-animate
                </label>
              </div>
            </div>
            <button
              ref={buttonRef} // Add the ref to the button element
              onClick={handleConjugateClick}
              className="bg-black text-white border border-white px-4 rounded text-xl font-bold"
            >
              conjugate!
            </button>
          </div>
          {conjugation && (
            <div className="w-full items-center flex">
              <div id="table" className="mt-7 mx-20 w-full">
                <div className="flex flex-row">
                  <div className="mb-2 flex flex-col flex-grow">
                    <p className="text-5xl font-bold">{conjugation.noun}</p>
                    <p className="text-xl italic">{conjugation.animacy}</p>
                  </div>
                </div>
                <div className="w-full text-center">
                  <table className="w-full border-collapse border border-neutral-500 text-center mx-auto">
                    <thead>
                      <tr>
                        <th className="border border-neutral-500 bg-neutral-900 w-80"></th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          singular
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          plural
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900 font-bold">
                          nominative{" "}
                          <span className="italic font-extralight text-neutral-400">
                            (who? what?)
                          </span>
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.nomSing}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.nomPlur}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900 font-bold">
                          accusative{" "}
                          <span className="italic font-extralight text-neutral-400">
                            (whom? what?)
                          </span>
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.accSing}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.accPlur}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900 font-bold">
                          genitive{" "}
                          <span className="italic font-extralight text-neutral-400">
                            (whose? which?)
                          </span>
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.genSing}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.genPlur}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900 font-bold">
                          essive{" "}
                          <span className="italic font-extralight text-neutral-400">
                            (as who? as what?)
                          </span>
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.essSing}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.essPlur}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900 font-bold">
                          comitative{" "}
                          <span className="italic font-extralight text-neutral-400">
                            (with whom? with what?)
                          </span>
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.comSing}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.comPlur}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900 font-bold">
                          dative{" "}
                          <span className="italic font-extralight text-neutral-400">
                            (to whom? to what?)
                          </span>
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.datSing}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.datPlur}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
