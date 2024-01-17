import Header from "../components/Header";
import Head from "next/head";
import "../app/globals.css";
import Link from "next/link";
import { detectVerbType } from "../api/VerbConj"; // Adjust the path as needed
import React, { useState, useEffect, useRef } from "react";

export default function VerbConjugation() {
  const [verb, setVerb] = useState("");
  const [conjugation, setConjugation] = useState(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null); // Add a ref for the button element

  const handleConjugateClick = () => {
    const detectedType = detectVerbType(verb);
    if (detectedType !== "Unknown") {
      setConjugation(detectedType); // Store the entire conjugation object
    } else {
      // Set a message when the verb type is unknown
      setConjugation("that's not a verb!");
    }
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
        <title>verb conjugator</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center h-full">
        <div className="mt-36 text-7xl font-bold">
          sathilian verb conjugator
        </div>
        <div className="flex flex-col font-mono mt-20 w-full items-center">
          <div className="flex flex-row">
            <input
              ref={inputRef}
              className="input-field border border-gray-300 p-2 m-2 text-white rounded bg-black"
              value={verb} // Ensure that the input value is controlled by React
              onChange={(e) => setVerb(e.target.value)} // Update the 'verb' state when input changes
            />
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
              {typeof conjugation === "string" ? (
                <p className="text-7xl w-full text-center mt-20 font-bold">
                  {conjugation}
                </p>
              ) : (
                <div id="table" className="mt-20 mx-20">
                  <div className="flex flex-row">
                    <div className="mb-4 flex flex-col flex-grow">
                      <p className="text-5xl font-bold">
                        {conjugation.verb}{" "}
                        <span className="italic">
                          (type {conjugation.type})
                        </span>
                      </p>
                      <div className="flex flex-col mt-5">
                        <p className="text-xl">
                          weak stem: {conjugation.weakStem}
                        </p>
                        <p className="text-xl">
                          strong stem: {conjugation.strongStem}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex-grow">
                      <table className="w-full border-collapse border border-neutral-500 text-center">
                        <tbody>
                          <tr>
                            <th className="border border-neutral-500">
                              present active participle (читающий)
                            </th>
                            <th className="border border-neutral-500 font-extralight">
                              {conjugation.presActPart}
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-neutral-500">
                              present passive participle (читаемый)
                            </th>
                            <th className="border border-neutral-500 font-extralight">
                              {conjugation.presPasPart}
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-neutral-500">
                              past active participle (читавший)
                            </th>
                            <th className="border border-neutral-500 font-extralight">
                              {conjugation.pastActPart}
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-neutral-500">
                              past passive participle (читанный)
                            </th>
                            <th className="border border-neutral-500 font-extralight">
                              {conjugation.pastPasPart}
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-neutral-500">
                              present adverb (читая)
                            </th>
                            <th className="border border-neutral-500 font-extralight">
                              {conjugation.presAdverb}
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-neutral-500">
                              past adverb (читав, читавши)
                            </th>
                            <th className="border border-neutral-500 font-extralight">
                              {conjugation.pastAdverb}
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <table className="w-full table-fixed border-collapse border border-neutral-500 text-center">
                    <thead>
                      <tr>
                        <th
                          className="border border-neutral-500 bg-neutral-900"
                          rowspan="2"
                        >
                          {conjugation.verb} - type {conjugation.type}
                        </th>
                        <th
                          className="border border-neutral-500 bg-neutral-900"
                          colspan="2"
                        >
                          present
                        </th>
                        <th
                          className="border border-neutral-500 bg-neutral-900"
                          colspan="2"
                        >
                          past
                        </th>
                        <th
                          className="border border-neutral-500 bg-neutral-900"
                          colspan="2"
                        >
                          future
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-neutral-500 bg-neutral-900">
                          pos
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          neg
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          pos
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          neg
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          pos
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          neg
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          via
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presPosVia}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presNegVia}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastPosVia}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastNegVia}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futPosVia}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futNegVia}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          ön
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presPosOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presNegOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastPosOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastNegOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futPosOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futNegOn}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          ki
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presPosKi}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presNegKi}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastPosKi}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastNegKi}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futPosKi}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futNegKi}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          sen
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presPosSen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presNegSen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastPosSen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastNegSen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futPosSen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futNegSen}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          den
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presPosDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presNegDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastPosDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastNegDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futPosDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futNegDen}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          ken
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presPosKen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presNegKen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastPosKen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastNegKen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futPosKen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futNegKen}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="w-full table-fixed border-collapse border border-neutral-500 text-center my-14">
                    <thead>
                      <tr>
                        <th
                          className="border border-neutral-500 bg-neutral-900"
                          rowspan="2"
                        >
                          conditionals
                        </th>
                        <th
                          className="border border-neutral-500 bg-neutral-900"
                          colspan="2"
                        >
                          present
                        </th>
                        <th
                          className="border border-neutral-500 bg-neutral-900"
                          colspan="2"
                        >
                          past
                        </th>
                        <th
                          className="border border-neutral-500 bg-neutral-900"
                          colspan="2"
                        >
                          future
                        </th>
                        <th
                          className="border border-neutral-500 bg-neutral-900"
                          colspan="2"
                        >
                          imperative
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-neutral-500 bg-neutral-900">
                          pos
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          neg
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          pos
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          neg
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          pos
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          neg
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          pos
                        </th>
                        <th className="border border-neutral-500 bg-neutral-900">
                          neg
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          via
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConPosVia}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConNegVia}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConPosVia}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConNegVia}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConPosVia}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConNegVia}
                        </td>
                        <td className="border border-neutral-500">-</td>
                        <td className="border border-neutral-500">-</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          ön
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConPosOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConNegOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConPosOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConNegOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConPosOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConNegOn}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.impPosSing}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.impNegSing}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          ki
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConPosKi}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConNegKi}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConPosKi}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConNegKi}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConPosKi}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConPosKi}
                        </td>
                        <td className="border border-neutral-500">-</td>
                        <td className="border border-neutral-500">-</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          sen
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConPosSen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConNegSen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConPosSen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConNegSen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConPosSen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConNegSen}
                        </td>
                        <td className="border border-neutral-500">-</td>
                        <td className="border border-neutral-500">-</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          den
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConPosDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConNegDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConPosDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConNegDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConPosDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConNegDen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.impPosPlur}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.impNegPlur}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-500 bg-neutral-900">
                          ken
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConPosKen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.presConNegKen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConPosKen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.pastConNegKen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConPosKen}
                        </td>
                        <td className="border border-neutral-500">
                          {conjugation.futConNegKen}
                        </td>
                        <td className="border border-neutral-500">-</td>
                        <td className="border border-neutral-500">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
