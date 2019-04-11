
//https://leetcode.com/problems/text-justification/submissions/


const fullJustify = (words, maxWidth) => {

  const res = [];

  let i=0, w=0;
  while(i<words.length) {
    let chars = -1;

    while(chars<maxWidth) {
      if (w === words.length || chars + words[w].length+1 > maxWidth) {
        break;
      }
      chars += words[w++].length + 1;
    }
    let totalSpaces = (maxWidth - (chars-(w-1-i)));

    console.log(totalSpaces)
    
    const spaceSize = parseInt(totalSpaces/(w-1-i));
    let remainder = totalSpaces%(w-1-i)

    console.log("spaceSize", spaceSize, "remainder", remainder)

    let s = "";
    for (let j=i; j<w; j++) {
      s += words[j];

      if (w<words.length) {
        if (j<w-1 && totalSpaces > 0) {
          if (spaceSize > 0) {
            s+= Array.apply(null, Array(spaceSize)).fill(" ").join("")
            totalSpaces -= spaceSize
            if (remainder > 0) {
              s+= " ";
              --remainder;
              --totalSpaces
            }
          } else {
            s+= " ";
            --totalSpaces;
          }
        }
      } else {
        if (totalSpaces > 0) {
          s+= " ";
          --totalSpaces;
        } 
      } 
    }

    while(totalSpaces > 0) {
      s+= " ";
      --totalSpaces;
    }

    res.push(s)

    i=w
  }

  // console.log('sring is ', res);
  return res
}





const words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// const words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16

console.log(fullJustify(words, maxWidth));


//["This    is    an","example  of text","justification.  " ]
//["This    is    an","example  of text","justification.  "]