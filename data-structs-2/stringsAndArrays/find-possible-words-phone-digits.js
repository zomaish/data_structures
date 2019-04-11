
const dic = {
  'tree': 'tree',
  'used': 'used'
};

//6:07

const getRightDigits = (number) => {
  const stack = []
  while (number > 0) {
    stack.push( number % 10 );
    number = parseInt(number / 10);
  }

  while (stack.length) {
    console.log('eaaaaa', stack.pop());
  }
}


  

const getLettersFromNumber = (num) => {

  

};


const translateNumsToWordsUtil = (letters, i, word) => {
  if (dic[word]) {
    console.log('found word', word);
  }

  if (i>=letters.length) {
    return;
  }

  const group = letters[i];

  for (let j=0; j<group.length; j++) {
    word += group[j];
    translateNumsToWordsUtil(letters, i+1, word);
    word = word.substring(0, word.length-1);
  }
};

const translateNumsToWords = (num) => {
  const letters = getLettersFromNumber(num);

  
  translateNumsToWordsUtil(letters, 0, '');

};



const phone = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

// translateNumsToWords(8733)

console.log(getRightDigits(8733));


