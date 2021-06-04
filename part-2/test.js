let phrase = "I love cryptology!";

const letters = [
  { letter: "a", count: 1, test: 11 },
  { letter: "b", count: 2, test: 12 },
  { letter: "c", count: 3, test: 13 },
  { letter: "d", count: 4, test: 14 },
  { letter: "e", count: 5, test: 15 },
  { letter: "f", count: 6, test: 16 },
  { letter: "g", count: 7, test: 17 },
  { letter: "g", count: 8, test: 18 },
  { letter: "i", count: 9, test: 19 },
  { letter: "j", count: 10, test: 20 },
  { letter: "k", count: 11, test: 21 },
  { letter: "l", count: 12, test: 22 },
  { letter: "m", count: 13, test: 23 },
  { letter: "n", count: 14, test: 24 },
  { letter: "o", count: 15, test: 25 },
  { letter: "p", count: 16, test: 26 },
  { letter: "q", count: 17, test: 27 },
  { letter: "r", count: 18, test: 28 },
  { letter: "s", count: 19, test: 29 },
  { letter: "t", count: 20, test: 30 },
  { letter: "u", count: 21, test: 31 },
  { letter: "v", count: 22, test: 32 },
  { letter: "w", count: 23, test: 33 },
  { letter: "x", count: 24, test: 34 },
  { letter: "y", count: 25, test: 35 },
  { letter: "z", count: 26, test: 36 },
];

const cypher = (pharse) => {
  let arr = [];
  const newPhrase = pharse.toLowerCase().split("");

  newPhrase.forEach((letter) => {
    const index = letters.findIndex((item) => item.letter === letter);

    if (index === -1) {
      if (letter === " ") {
        arr.push("++");
        return;
      } else if (letter === "!") {
        arr.push("*");
        return;
      }
    } else {
      arr.push(letters[index].test);
    }
  });
};
