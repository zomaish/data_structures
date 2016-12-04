

// hashTable[i] stores all characters that correspond to digit i in phone
const  hashTable = ["", "", "abc", "def", "ghi", "jkl",
                               "mno", "pqrs", "tuv", "wxyz"];

// A recursive function to print all possible words that can be obtained
// by input number[] of size n.  The output words are one by one stored
// in output[]
  function printWordsUtil(number, curr_digit,  output, n)
{
    // Base case, if current output word is prepared
    let i;
    if (curr_digit == n)
    {
        console.log(output);
        return ;
    }

    // Try all 3 possible characters for current digir in number[]
    // and recur for remaining digits
    for (i=0; i<hashTable[number[curr_digit]].length; i++)
    {
        output[curr_digit] = hashTable[number[curr_digit]][i];
        printWordsUtil(number, curr_digit+1, output, n);
        if (number[curr_digit] == 0 || number[curr_digit] == 1)
            return;
    }
}

// A wrapper over printWordsUtil().  It creates an output array and
// calls printWordsUtil()
function printWords(number, n) {

    let result = new Array(n+1);

    printWordsUtil(number, 0, result, n);
}

//Driver program
let number = [2, 3, 4];
  let n = number.length;
    printWords(number, n);
    
