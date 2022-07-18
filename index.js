const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Please input a sentence:\n", (sentence) => {
    const splitSentence = sentence.replaceAll(",", "").split(" ");
    const x = splitSentence.reduce((wordA, wordB) => {
        if (wordA.length > wordB.length) return wordA;
        else if (wordA.length < wordB.length) return wordB;
        else if (wordA.length == wordB.length) {
            let wordAVowelCtr = 0,
                wordBVowelCtr = 0;
            const vowels = ["a", "e", "i", "o", "u"];
            for (const letter of wordA) {
                if (vowels.includes(letter)) wordAVowelCtr++;
            }
            for (const letter of wordB) {
                if (vowels.includes(letter)) wordBVowelCtr++;
            }
            if (wordAVowelCtr > wordBVowelCtr) return wordA;
            if (wordAVowelCtr < wordBVowelCtr) return wordB;
        }
    });
    console.log(x);
    readline.close();
});