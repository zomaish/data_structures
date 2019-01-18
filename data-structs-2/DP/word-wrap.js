

const solveWordWrap = (words, m) => {
    const n = words.length;
    const MAX = Number.MAX_VALUE;

    const spaces = Array.apply(null, Array(n)).map(() => Array.apply(null, Array(n)));
    const cost = Array.apply(null, Array(n)).map(Number.prototype.valueOf, Number.MAX_VALUE);
    const p = Array.apply(null, Array(n));

    for (let r=0; r<n; r++) {
        spaces[r][r] = m - words[r];
        for (let c=r+1; c<n; c++) {
            spaces[r][c] = spaces[r][c-1] - words[c] -1
        }
    }

    for (let r=0; r<n; r++) {
        for (let c=0; c<n; c++) {
            if (c === n-1 && r === n-1) {
                spaces[r][c] = 0
            } else if (spaces[r][c] >= 0) {
                spaces[r][c] = spaces[r][c]*spaces[r][c];
            } else {
                spaces[r][c] = MAX;
            }
        }
    }

    for (let c=0; c<n; c++) {
        for (let r=0; r<=c; r++) {
            const prevC = r===0 ? 0 : cost[r-1];

            if (prevC !==MAX && spaces[r][c] !==MAX && (spaces[r][c] + prevC) < cost[c]) {
                cost[c] = spaces[r][c] + prevC;
                p[c] = r;
            }
            
        }
    }

    console.log(spaces, cost, p)

}

let words = [3, 2, 2, 5];

solveWordWrap(words, 6)