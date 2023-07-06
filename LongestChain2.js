// longest-chain-of-letters-in-word-javascript
// const word = '00000111110101001111100001001

const word = '00000111110101001111100001001';

function longestChainOfLetters(word) {
  let longestChain = '';
  let currentChain = '';

  // Loop through each character in the word
  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];

    // If the current character is the same as the previous one, add it to the current chain
    if (currentChar === word[i - 1]) {
      currentChain += currentChar;
    } else {
      // If the current chain is longer than the previous longest chain, update it
      if (currentChain.length > longestChain.length) {
        longestChain = currentChain;
      }
      currentChain = currentChar; // Start a new chain
    }
  }

  // Check if the last chain is longer than the previous longest chain
  if (currentChain.length > longestChain.length) {
    longestChain = currentChain;
  }

  return longestChain;
}

const result = longestChainOfLetters(word);
console.log(result); 

// Output: '11111'