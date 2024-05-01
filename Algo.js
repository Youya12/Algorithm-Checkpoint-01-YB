const str = "The weather is beautiful today"

const myLength = str.length
const words = str.split(" ");
const vowels = "aeiouAEIOU"

//The length of the sentence
console.log(`"${str}" has ${myLength} characters`)

//The number of words in the sentence 
console.log(`"${str}" has ${words.length} words`)

//The number of vowels in the sentence
let vowelsCount=0
for (let i=0; i<str.length; i++){
    if(vowels.includes(str[i])){
        vowelsCount++
    }
}
console.log(`"${str}" has ${vowelsCount} vowels`)