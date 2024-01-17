import { useState, useRef } from "react";

const ipaChart = {
  a: "ɐ",
  b: "b",
  v: "v",
  g: "g",
  d: "d",
  e: "e",
  ö: "ø",
  i: "i",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  o: "ɔ",
  p: "p",
  T: "θ",
  D: "ð",
  r: "r",
  s: "s",
  S: "ʂ",
  t: "t",
  u: "u",
  f: "f",
  h: "ɣ",
  y: "y",
};

function IpaGenerator() {
  const [inputText, setInputText] = useState("");
  const textInputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const insertCharacter = (character) => {
    if (textInputRef.current) {
      const input = textInputRef.current;
      const start = input.selectionStart;
      const end = input.selectionEnd;

      const newText =
        inputText.substring(0, start) + character + inputText.substring(end);
      setInputText(newText);

      // Set the cursor position after the inserted character
      input.setSelectionRange(start + 1, start + 1);
      input.focus();
    }
  };

  const convertToIpa = () => {
    // Split the input text into words
    const words = inputText.split(/\s+/);

    // Map each word to its IPA representation and wrap in brackets
    const ipaWords = words.map((word) => {
      let ipaWord = "";
      for (const char of word) {
        if (ipaChart[char]) {
          ipaWord += ipaChart[char];
        } else {
          // If the character is not in the IPA chart, keep it as-is
          ipaWord += char;
        }
      }
      return `[${ipaWord}]`;
    });

    // Join the IPA words with newlines
    return ipaWords.join("\n");
  };

  return (
    <div className="mt-20 font-mono">
      <div className="flex flex-row">
        <div className="flex flex-row">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text"
            className="border border-gray-300 p-2 m-2 text-white w-[500px] rounded h-72 bg-black"
            ref={textInputRef}
          />
          <button
            onClick={() => insertCharacter("ˈ")}
            className="bg-black text-white border border-white px-4 my-4 rounded text-3xl font-bold"
          >
            ˈ
          </button>
        </div>
        <div className="">
          <div>
            <textarea
              value={convertToIpa()}
              readOnly
              rows={5} // Set the number of rows as needed
              className="border border-gray-300 p-2 m-2 text-white w-[500px] rounded h-72 bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IpaGenerator;
