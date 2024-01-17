// src/api/VerbConj.js

export function detectVerbType(verb) {
  // Type 1: [any consonant][i/e/ö/y][d]
  if (/[^aeiouyö][ieöy]d$/.test(verb) || /[^aeiouyö][ieöy]d$/i.test(verb)) {
    const weakStem = verb.slice(0, -2);
    const strongStem = verb.slice(0, -1);

    const presPosVia = strongStem + "m";
    const presPosOn = strongStem + "r";
    const presPosKi = strongStem + "sh";
    const presPosSen = strongStem + "ma";
    const presPosDen = strongStem + "ro";
    const presPosKen = strongStem + "she";

    const presNegVia = weakStem + "ai" + "m";
    const presNegOn = weakStem + "ai" + "r";
    const presNegKi = weakStem + "ai" + "sh";
    const presNegSen = weakStem + "ai" + "ma";
    const presNegDen = weakStem + "ai" + "ro";
    const presNegKen = weakStem + "ai" + "she";

    const pastPosVia = strongStem + "m" + strongStem.slice(-1) + "t";
    const pastPosOn = strongStem + "r" + strongStem.slice(-1) + "t";
    const pastPosKi = strongStem + "sh" + strongStem.slice(-1) + "t";
    const pastPosSen = strongStem + "ma" + "t";
    const pastPosDen = strongStem + "ro" + "t";
    const pastPosKen = strongStem + "she" + "t";

    const pastNegVia = weakStem + "ai" + "m" + strongStem.slice(-1) + "t";
    const pastNegOn = weakStem + "ai" + "r" + strongStem.slice(-1) + "t";
    const pastNegKi = weakStem + "ai" + "sh" + strongStem.slice(-1) + "t";
    const pastNegSen = weakStem + "ai" + "ma" + "t";
    const pastNegDen = weakStem + "ai" + "ro" + "t";
    const pastNegKen = weakStem + "ai" + "she" + "t";

    const futPosVia = strongStem + "m" + strongStem.slice(-1) + "s";
    const futPosOn = strongStem + "r" + strongStem.slice(-1) + "s";
    const futPosKi = strongStem + "sh" + strongStem.slice(-1) + "s";
    const futPosSen = strongStem + "ma" + "s";
    const futPosDen = strongStem + "ro" + "s";
    const futPosKen = strongStem + "she" + "s";

    const futNegVia = weakStem + "ai" + "m" + strongStem.slice(-1) + "s";
    const futNegOn = weakStem + "ai" + "r" + strongStem.slice(-1) + "s";
    const futNegKi = weakStem + "ai" + "sh" + strongStem.slice(-1) + "s";
    const futNegSen = weakStem + "ai" + "ma" + "s";
    const futNegDen = weakStem + "ai" + "ro" + "s";
    const futNegKen = weakStem + "ai" + "she" + "s";

    const presConPosVia = weakStem + "o" + "m" + "i";
    const presConPosOn = weakStem + "o" + "r" + "i";
    const presConPosKi = weakStem + "o" + "sh" + "i";
    const presConPosSen = weakStem + "o" + "ma" + "i";
    const presConPosDen = weakStem + "o" + "ro" + "i";
    const presConPosKen = weakStem + "o" + "she" + "i";

    const presConNegVia = weakStem + "ai" + "m" + "i";
    const presConNegOn = weakStem + "ai" + "r" + "i";
    const presConNegKi = weakStem + "ai" + "sh" + "i";
    const presConNegSen = weakStem + "ai" + "ma" + "i";
    const presConNegDen = weakStem + "ai" + "ro" + "i";
    const presConNegKen = weakStem + "ai" + "she" + "i";

    const pastConPosVia = "to " + weakStem + "o" + "m" + "i";
    const pastConPosOn = "to " + weakStem + "o" + "r" + "i";
    const pastConPosKi = "to " + weakStem + "o" + "sh" + "i";
    const pastConPosSen = "to " + weakStem + "o" + "ma" + "i";
    const pastConPosDen = "to " + weakStem + "o" + "ro" + "i";
    const pastConPosKen = "to " + weakStem + "o" + "she" + "i";

    const pastConNegVia = "to " + weakStem + "ai" + "m" + "i";
    const pastConNegOn = "to " + weakStem + "ai" + "r" + "i";
    const pastConNegKi = "to " + weakStem + "ai" + "sh" + "i";
    const pastConNegSen = "to " + weakStem + "ai" + "ma" + "i";
    const pastConNegDen = "to " + weakStem + "ai" + "ro" + "i";
    const pastConNegKen = "to " + weakStem + "ai" + "she" + "i";

    const futConPosVia = "so " + weakStem + "o" + "m" + "i";
    const futConPosOn = "so " + weakStem + "o" + "r" + "i";
    const futConPosKi = "so " + weakStem + "o" + "sh" + "i";
    const futConPosSen = "so " + weakStem + "o" + "ma" + "i";
    const futConPosDen = "so " + weakStem + "o" + "ro" + "i";
    const futConPosKen = "so " + weakStem + "o" + "she" + "i";

    const futConNegVia = "so " + weakStem + "ai" + "m" + "i";
    const futConNegOn = "so " + weakStem + "ai" + "r" + "i";
    const futConNegKi = "so " + weakStem + "ai" + "sh" + "i";
    const futConNegSen = "so " + weakStem + "ai" + "ma" + "i";
    const futConNegDen = "so " + weakStem + "ai" + "ro" + "i";
    const futConNegKen = "so " + weakStem + "ai" + "she" + "i";

    const impPosSing = strongStem;
    const impPosPlur = strongStem + "t";
    const impNegSing = weakStem + "ai";
    const impNegPlur = weakStem + "ai" + "t";

    const presActPart = "tatho" + strongStem;
    const presPasPart = "tes" + strongStem;
    const pastActPart = "tatho" + strongStem + "ve";
    const pastPasPart = "tes" + strongStem + "ve";

    const presAdverb = weakStem + "e" + strongStem.slice(-1) + "dha";
    const pastAdverb = strongStem + "dh" + strongStem.slice(-1) + "t";

    return {
      verb,
      type: "1",
      weakStem,
      strongStem,
      presPosVia,
      presPosOn,
      presPosKi,
      presPosSen,
      presPosDen,
      presPosKen,
      presNegVia,
      presNegOn,
      presNegKi,
      presNegSen,
      presNegDen,
      presNegKen,
      pastPosVia,
      pastPosOn,
      pastPosKi,
      pastPosSen,
      pastPosDen,
      pastPosKen,
      pastNegVia,
      pastNegOn,
      pastNegKi,
      pastNegSen,
      pastNegDen,
      pastNegKen,
      futPosVia,
      futPosOn,
      futPosKi,
      futPosSen,
      futPosDen,
      futPosKen,
      futNegVia,
      futNegOn,
      futNegKi,
      futNegSen,
      futNegDen,
      futNegKen,
      presConPosVia,
      presConPosOn,
      presConPosKi,
      presConPosSen,
      presConPosDen,
      presConPosKen,
      presConNegVia,
      presConNegOn,
      presConNegKi,
      presConNegSen,
      presConNegDen,
      presConNegKen,
      pastConPosVia,
      pastConPosOn,
      pastConPosKi,
      pastConPosSen,
      pastConPosDen,
      pastConPosKen,
      pastConNegVia,
      pastConNegOn,
      pastConNegKi,
      pastConNegSen,
      pastConNegDen,
      pastConNegKen,
      futConPosVia,
      futConPosOn,
      futConPosKi,
      futConPosSen,
      futConPosDen,
      futConPosKen,
      futConNegVia,
      futConNegOn,
      futConNegKi,
      futConNegSen,
      futConNegDen,
      futConNegKen,
      impPosSing,
      impPosPlur,
      impNegSing,
      impNegPlur,
      presActPart,
      presPasPart,
      pastActPart,
      pastPasPart,
      presAdverb,
      pastAdverb,
    };
  }

  // Type 2: [any consonant][a/u/o][d]
  if (/[^aeiouyö][auo]d$/.test(verb) || /[^aeiouyö][auo]d$/i.test(verb)) {
    const weakStem = verb;
    const strongStem = verb + verb.slice(-2, -1);

    const presPosVia = strongStem + "m";
    const presPosOn = strongStem + "r";
    const presPosKi = strongStem + "sh";
    const presPosSen = strongStem + "ma";
    const presPosDen = strongStem + "ro";
    const presPosKen = strongStem + "she";

    const presNegVia = weakStem + "ai" + "m";
    const presNegOn = weakStem + "ai" + "r";
    const presNegKi = weakStem + "ai" + "sh";
    const presNegSen = weakStem + "ai" + "ma";
    const presNegDen = weakStem + "ai" + "ro";
    const presNegKen = weakStem + "ai" + "she";

    const pastPosVia = strongStem + "m" + "t";
    const pastPosOn = strongStem + "r" + "t";
    const pastPosKi = strongStem + "sh" + "t";
    const pastPosSen = strongStem + "ma" + "t";
    const pastPosDen = strongStem + "ro" + "t";
    const pastPosKen = strongStem + "she" + "t";

    const pastNegVia = weakStem + "ai" + "m" + "t";
    const pastNegOn = weakStem + "ai" + "r" + "t";
    const pastNegKi = weakStem + "ai" + "sh" + "t";
    const pastNegSen = weakStem + "ai" + "ma" + "t";
    const pastNegDen = weakStem + "ai" + "ro" + "t";
    const pastNegKen = weakStem + "ai" + "she" + "t";

    const futPosVia = strongStem + "m" + "s";
    const futPosOn = strongStem + "r" + "s";
    const futPosKi = strongStem + "s";
    const futPosSen = strongStem + "ma" + "s";
    const futPosDen = strongStem + "ro" + "s";
    const futPosKen = strongStem + "she" + "s";

    const futNegVia = weakStem + "ai" + "m" + "s";
    const futNegOn = weakStem + "ai" + "r" + "s";
    const futNegKi = weakStem + "ai" + "s";
    const futNegSen = weakStem + "ai" + "ma" + "s";
    const futNegDen = weakStem + "ai" + "ro" + "s";
    const futNegKen = weakStem + "ai" + "she" + "s";

    const presConPosVia = weakStem + "o" + "m" + "i";
    const presConPosOn = weakStem + "o" + "r" + "i";
    const presConPosKi = weakStem + "o" + "sh" + "i";
    const presConPosSen = weakStem + "o" + "ma" + "i";
    const presConPosDen = weakStem + "o" + "ro" + "i";
    const presConPosKen = weakStem + "o" + "she" + "i";

    const presConNegVia = weakStem + "ai" + "m" + "i";
    const presConNegOn = weakStem + "ai" + "r" + "i";
    const presConNegKi = weakStem + "ai" + "sh" + "i";
    const presConNegSen = weakStem + "ai" + "ma" + "i";
    const presConNegDen = weakStem + "ai" + "ro" + "i";
    const presConNegKen = weakStem + "ai" + "she" + "i";

    const pastConPosVia = "to " + weakStem + "o" + "m" + "i";
    const pastConPosOn = "to " + weakStem + "o" + "r" + "i";
    const pastConPosKi = "to " + weakStem + "o" + "sh" + "i";
    const pastConPosSen = "to " + weakStem + "o" + "ma" + "i";
    const pastConPosDen = "to " + weakStem + "o" + "ro" + "i";
    const pastConPosKen = "to " + weakStem + "o" + "she" + "i";

    const pastConNegVia = "to " + weakStem + "ai" + "m" + "i";
    const pastConNegOn = "to " + weakStem + "ai" + "r" + "i";
    const pastConNegKi = "to " + weakStem + "ai" + "sh" + "i";
    const pastConNegSen = "to " + weakStem + "ai" + "ma" + "i";
    const pastConNegDen = "to " + weakStem + "ai" + "ro" + "i";
    const pastConNegKen = "to " + weakStem + "ai" + "she" + "i";

    const futConPosVia = "so " + weakStem + "o" + "m" + "i";
    const futConPosOn = "so " + weakStem + "o" + "r" + "i";
    const futConPosKi = "so " + weakStem + "o" + "sh" + "i";
    const futConPosSen = "so " + weakStem + "o" + "ma" + "i";
    const futConPosDen = "so " + weakStem + "o" + "ro" + "i";
    const futConPosKen = "so " + weakStem + "o" + "she" + "i";

    const futConNegVia = "so " + weakStem + "ai" + "m" + "i";
    const futConNegOn = "so " + weakStem + "ai" + "r" + "i";
    const futConNegKi = "so " + weakStem + "ai" + "sh" + "i";
    const futConNegSen = "so " + weakStem + "ai" + "ma" + "i";
    const futConNegDen = "so " + weakStem + "ai" + "ro" + "i";
    const futConNegKen = "so " + weakStem + "ai" + "she" + "i";

    const impPosSing = strongStem;
    const impPosPlur = strongStem + "t";
    const impNegSing = weakStem + "ai";
    const impNegPlur = weakStem + "ai" + "t";

    const presActPart = "tatho" + strongStem;
    const presPasPart = "tes" + strongStem;
    const pastActPart = "tatho" + strongStem + "ve";
    const pastPasPart = "tes" + strongStem + "ve";

    const presAdverb = weakStem + "e" + verb.slice(-2, -1) + "dha";
    const pastAdverb = strongStem + "dh" + verb.slice(-2, -1) + "t";

    return {
      verb,
      type: "2",
      weakStem,
      strongStem,
      presPosVia,
      presPosOn,
      presPosKi,
      presPosSen,
      presPosDen,
      presPosKen,
      presNegVia,
      presNegOn,
      presNegKi,
      presNegSen,
      presNegDen,
      presNegKen,
      pastPosVia,
      pastPosOn,
      pastPosKi,
      pastPosSen,
      pastPosDen,
      pastPosKen,
      pastNegVia,
      pastNegOn,
      pastNegKi,
      pastNegSen,
      pastNegDen,
      pastNegKen,
      futPosVia,
      futPosOn,
      futPosKi,
      futPosSen,
      futPosDen,
      futPosKen,
      futNegVia,
      futNegOn,
      futNegKi,
      futNegSen,
      futNegDen,
      futNegKen,
      presConPosVia,
      presConPosOn,
      presConPosKi,
      presConPosSen,
      presConPosDen,
      presConPosKen,
      presConNegVia,
      presConNegOn,
      presConNegKi,
      presConNegSen,
      presConNegDen,
      presConNegKen,
      pastConPosVia,
      pastConPosOn,
      pastConPosKi,
      pastConPosSen,
      pastConPosDen,
      pastConPosKen,
      pastConNegVia,
      pastConNegOn,
      pastConNegKi,
      pastConNegSen,
      pastConNegDen,
      pastConNegKen,
      futConPosVia,
      futConPosOn,
      futConPosKi,
      futConPosSen,
      futConPosDen,
      futConPosKen,
      futConNegVia,
      futConNegOn,
      futConNegKi,
      futConNegSen,
      futConNegDen,
      futConNegKen,
      impPosSing,
      impPosPlur,
      impNegSing,
      impNegPlur,
      presActPart,
      presPasPart,
      pastActPart,
      pastPasPart,
      presAdverb,
      pastAdverb,
    };
  }

  // Type 3: [any consonant][any two vowels][d]
  if (
    /[^aeiouyö][aeiouyö]{2}d$/.test(verb) ||
    /[^aeiouyö][aeiouyö]{2}d$/i.test(verb)
  ) {
    const weakStem = verb.slice(0, -3);
    const strongStem = verb.slice(0, -2);

    const presPosVia = strongStem + "m";
    const presPosOn = strongStem + "r";
    const presPosKi = strongStem + "sh";
    const presPosSen = strongStem + "ma";
    const presPosDen = strongStem + "ro";
    const presPosKen = strongStem + "she";

    const presNegVia = strongStem + "d" + "ai" + "m";
    const presNegOn = strongStem + "d" + "ai" + "r";
    const presNegKi = strongStem + "d" + "ai" + "sh";
    const presNegSen = strongStem + "d" + "ai" + "ma";
    const presNegDen = strongStem + "d" + "ai" + "ro";
    const presNegKen = strongStem + "d" + "ai" + "she";

    const pastPosVia = strongStem + "m" + verb.slice(-2, -1) + "t";
    const pastPosOn = strongStem + "r" + verb.slice(-2, -1) + "t";
    const pastPosKi = strongStem + "sh" + verb.slice(-2, -1) + "t";
    const pastPosSen = strongStem + "ma" + verb.slice(-2, -1) + "t";
    const pastPosDen = strongStem + "ro" + verb.slice(-2, -1) + "t";
    const pastPosKen = strongStem + "she" + verb.slice(-2, -1) + "t";

    const pastNegVia = weakStem + "ai" + "m" + verb.slice(-2, -1) + "t";
    const pastNegOn = weakStem + "ai" + "r" + verb.slice(-2, -1) + "t";
    const pastNegKi = weakStem + "ai" + "sh" + verb.slice(-2, -1) + "t";
    const pastNegSen = weakStem + "ai" + "ma" + verb.slice(-2, -1) + "t";
    const pastNegDen = weakStem + "ai" + "ro" + verb.slice(-2, -1) + "t";
    const pastNegKen = weakStem + "ai" + "she" + verb.slice(-2, -1) + "t";

    const futPosVia = strongStem + "m" + verb.slice(-2, -1) + "s";
    const futPosOn = strongStem + "r" + verb.slice(-2, -1) + "s";
    const futPosKi = strongStem + "sh" + verb.slice(-2, -1) + "s";
    const futPosSen = strongStem + "ma" + verb.slice(-2, -1) + "s";
    const futPosDen = strongStem + "ro" + verb.slice(-2, -1) + "s";
    const futPosKen = strongStem + "she" + verb.slice(-2, -1) + "s";

    const futNegVia = weakStem + "ai" + "m" + verb.slice(-2, -1) + "s";
    const futNegOn = weakStem + "ai" + "r" + verb.slice(-2, -1) + "s";
    const futNegKi = weakStem + "ai" + "sh" + verb.slice(-2, -1) + "s";
    const futNegSen = weakStem + "ai" + "ma" + verb.slice(-2, -1) + "s";
    const futNegDen = weakStem + "ai" + "ro" + verb.slice(-2, -1) + "s";
    const futNegKen = weakStem + "ai" + "she" + verb.slice(-2, -1) + "s";

    const presConPosVia = weakStem + "o" + "m" + "i";
    const presConPosOn = weakStem + "o" + "r" + "i";
    const presConPosKi = weakStem + "o" + "sh" + "i";
    const presConPosSen = weakStem + "o" + "ma" + "i";
    const presConPosDen = weakStem + "o" + "ro" + "i";
    const presConPosKen = weakStem + "o" + "she" + "i";

    const presConNegVia = weakStem + "ai" + "m" + "i";
    const presConNegOn = weakStem + "ai" + "r" + "i";
    const presConNegKi = weakStem + "ai" + "sh" + "i";
    const presConNegSen = weakStem + "ai" + "ma" + "i";
    const presConNegDen = weakStem + "ai" + "ro" + "i";
    const presConNegKen = weakStem + "ai" + "she" + "i";

    const pastConPosVia = "to " + weakStem + "o" + "m" + "i";
    const pastConPosOn = "to " + weakStem + "o" + "r" + "i";
    const pastConPosKi = "to " + weakStem + "o" + "sh" + "i";
    const pastConPosSen = "to " + weakStem + "o" + "ma" + "i";
    const pastConPosDen = "to " + weakStem + "o" + "ro" + "i";
    const pastConPosKen = "to " + weakStem + "o" + "she" + "i";

    const pastConNegVia = "to " + weakStem + "ai" + "m" + "i";
    const pastConNegOn = "to " + weakStem + "ai" + "r" + "i";
    const pastConNegKi = "to " + weakStem + "ai" + "sh" + "i";
    const pastConNegSen = "to " + weakStem + "ai" + "ma" + "i";
    const pastConNegDen = "to " + weakStem + "ai" + "ro" + "i";
    const pastConNegKen = "to " + weakStem + "ai" + "she" + "i";

    const futConPosVia = "so " + weakStem + "o" + "m" + "i";
    const futConPosOn = "so " + weakStem + "o" + "r" + "i";
    const futConPosKi = "so " + weakStem + "o" + "sh" + "i";
    const futConPosSen = "so " + weakStem + "o" + "ma" + "i";
    const futConPosDen = "so " + weakStem + "o" + "ro" + "i";
    const futConPosKen = "so " + weakStem + "o" + "she" + "i";

    const futConNegVia = "so " + weakStem + "ai" + "m" + "i";
    const futConNegOn = "so " + weakStem + "ai" + "r" + "i";
    const futConNegKi = "so " + weakStem + "ai" + "sh" + "i";
    const futConNegSen = "so " + weakStem + "ai" + "ma" + "i";
    const futConNegDen = "so " + weakStem + "ai" + "ro" + "i";
    const futConNegKen = "so " + weakStem + "ai" + "she" + "i";

    const impPosSing = strongStem;
    const impPosPlur = strongStem + "t";
    const impNegSing = weakStem + "ai";
    const impNegPlur = weakStem + "ai" + "t";

    const presActPart = "tatho" + strongStem;
    const presPasPart = "tes" + strongStem;
    const pastActPart = "tatho" + strongStem + "ve";
    const pastPasPart = "tes" + strongStem + "ve";

    const presAdverb = weakStem + "e" + verb.slice(-2, -1) + "dha";
    const pastAdverb = strongStem + "dh" + verb.slice(-2, -1) + "t";

    return {
      verb,
      type: "3",
      weakStem,
      strongStem,
      presPosVia,
      presPosOn,
      presPosKi,
      presPosSen,
      presPosDen,
      presPosKen,
      presNegVia,
      presNegOn,
      presNegKi,
      presNegSen,
      presNegDen,
      presNegKen,
      pastPosVia,
      pastPosOn,
      pastPosKi,
      pastPosSen,
      pastPosDen,
      pastPosKen,
      pastNegVia,
      pastNegOn,
      pastNegKi,
      pastNegSen,
      pastNegDen,
      pastNegKen,
      futPosVia,
      futPosOn,
      futPosKi,
      futPosSen,
      futPosDen,
      futPosKen,
      futNegVia,
      futNegOn,
      futNegKi,
      futNegSen,
      futNegDen,
      futNegKen,
      presConPosVia,
      presConPosOn,
      presConPosKi,
      presConPosSen,
      presConPosDen,
      presConPosKen,
      presConNegVia,
      presConNegOn,
      presConNegKi,
      presConNegSen,
      presConNegDen,
      presConNegKen,
      pastConPosVia,
      pastConPosOn,
      pastConPosKi,
      pastConPosSen,
      pastConPosDen,
      pastConPosKen,
      pastConNegVia,
      pastConNegOn,
      pastConNegKi,
      pastConNegSen,
      pastConNegDen,
      pastConNegKen,
      futConPosVia,
      futConPosOn,
      futConPosKi,
      futConPosSen,
      futConPosDen,
      futConPosKen,
      futConNegVia,
      futConNegOn,
      futConNegKi,
      futConNegSen,
      futConNegDen,
      futConNegKen,
      impPosSing,
      impPosPlur,
      impNegSing,
      impNegPlur,
      presActPart,
      presPasPart,
      pastActPart,
      pastPasPart,
      presAdverb,
      pastAdverb,
    };
  }

  return "Unknown";
}
