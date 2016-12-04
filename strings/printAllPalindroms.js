function printAllPalindroms(str, start, end) {
    
    if (start == str.length) return;
 
    if (end>str.length-1)
        return printAllPalindroms(str, start+1, start+1);

    if (isPalindrom(str, start, end)) {
        printSubStr(str, start, end);
    }

    return printAllPalindroms(str, start, end+1);
}


function isPalindrom(str, start, end) {
    let l = 1+end-start;
    for (let i=0; i<l; i++) {
        if (str[start+i] !== str[end-i])
            return false;
    }

    return true;
}

function printSubStr(str, start, end) {
    let res = [];
    x = 0;
    for (let i=start; i<=end; i++) {
        res[x++] = str[i];
    }

    console.log(res.join(""));
}


var str = "nitin";
printAllPalindroms(str, 0, 0)