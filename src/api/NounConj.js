// src/api/NounConj.js

export function conjugateNoun(noun, animacy) {
  const endsWithVowel = /[aeiouyö]$/i.test(noun);
  const endsWithConsonant = /[^aeiouyö]$/i.test(noun);

  if (animacy === "animate") {
    if (endsWithVowel) {
      const nomSing = noun;
      const nomPlur = noun + "t";

      const accSing = noun + "s";
      const accPlur = noun + "as";

      const genSing = noun + "du";
      const genPlur = noun + "adu";

      const essSing = noun + "k";
      const essPlur = noun + "aik";

      const comSing = noun + "vi";
      const comPlur = noun + "avi";

      const datSing = noun + "n";
      const datPlur = noun + "on";

      return {
        noun,
        animacy: "animate",
        nomSing,
        nomPlur,
        accSing,
        accPlur,
        genSing,
        genPlur,
        essSing,
        essPlur,
        comSing,
        comPlur,
        datSing,
        datPlur,
      };
    } else if (endsWithConsonant) {
      const nomSing = noun;
      const nomPlur = noun + "at";

      const accSing = noun + "as";
      const accPlur = noun + "as";

      const genSing = noun + "adu";
      const genPlur = noun + "adu";

      const essSing = noun + "aik";
      const essPlur = noun + "aik";

      const comSing = noun + "avi";
      const comPlur = noun + "avi";

      const datSing = noun + "on";
      const datPlur = noun + "on";

      return {
        noun,
        animacy: "animate",
        nomSing,
        nomPlur,
        accSing,
        accPlur,
        genSing,
        genPlur,
        essSing,
        essPlur,
        comSing,
        comPlur,
        datSing,
        datPlur,
      };
    }
  } else if (animacy === "nonanimate") {
    if (endsWithVowel) {
      const nomSing = noun;
      const nomPlur = noun + "t";

      const accSing = noun + "s";
      const accPlur = noun + "es";

      const genSing = noun + "d";
      const genPlur = noun + "ed";

      const essSing = noun + "k";
      const essPlur = noun + "ek";

      const comSing = noun + "fe";
      const comPlur = noun + "öf";

      const datSing = noun + "shti";
      const datPlur = noun + "esh";

      return {
        noun,
        animacy: "non-animate",
        nomSing,
        nomPlur,
        accSing,
        accPlur,
        genSing,
        genPlur,
        essSing,
        essPlur,
        comSing,
        comPlur,
        datSing,
        datPlur,
      };
    } else if (endsWithConsonant) {
      const nomSing = noun;
      const nomPlur = noun + "et";

      const accSing = noun + "es";
      const accPlur = noun + "es";

      const genSing = noun + "ed";
      const genPlur = noun + "ed";

      const essSing = noun + "ek";
      const essPlur = noun + "ek";

      const comSing = noun + "öf";
      const comPlur = noun + "öf";

      const datSing = noun + "esh";
      const datPlur = noun + "esh";

      return {
        noun,
        animacy: "non-animate",
        nomSing,
        nomPlur,
        accSing,
        accPlur,
        genSing,
        genPlur,
        essSing,
        essPlur,
        comSing,
        comPlur,
        datSing,
        datPlur,
      };
    }
  }

  return {
    noun: "Invalid noun",
    animation: "Invalid animacy",
  };
}
