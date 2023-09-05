function wordCounter(sentence) {
    const WordFrequencyMap = new Map ();

    const words = sentence.split(/\s+/);

    for ( const word of words ){
        const cleanWord = word.toLowerCase(). replace(',', '')  
if (cleanWord.length > 0 ){
    WordFrequencyMap.set(cleanWord, (WordFrequencyMap.get(cleanWord)|| 0) + 1);
        }
   }
   return WordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);