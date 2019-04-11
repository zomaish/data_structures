//create a graph of chars based on non matching chars
// top sort and make sure you don't hit the same char in the same loop and don't visit the same char from outer loop

const N = 26;
const aAscii = "a".charCodeAt();

const buildGrap = (arr) => {
  const adj = {};
  
  for (let i=0; i<arr.length-1; i++) {
    const w1 = arr[i];
    const w2 = arr[i+1];

    const len = Math.min(w1.length, w2.length);

    for (let j=0; j<len; j++) {
      if (w1[j] !== w2[j]) {
        if (!adj.hasOwnProperty(w1[j])) {
          adj[w1[j]] = [w2[j]]
        } else {
          if (adj[w1[j]].indexOf(w2[j]) === -1) {
            adj[w1[j]].push(w2[j])
          }
        }
      }
    }
  }

  return adj;
};


const topSortUtil = (g, l, visited, localVisited, q) => {
  localVisited[l.charCodeAt() - aAscii] = true;
  visited[l.charCodeAt() - aAscii] = true;

  if (g[l]) {
    const list = g[l];

    for (let i=0; i<list.length; i++) {
      const c = list[i];

      if (localVisited[c.charCodeAt()-aAscii]) return false;
      if (!visited[c.charCodeAt()-aAscii])
      if (!topSortUtil(g, c, visited, localVisited, q)) return false
    }
  }

  q.unshift(l)
  return true
};

const topSort = (g, l, visited, q) => {
  visited[l.charCodeAt() - aAscii] = true;
  const localVisited = Array.apply(null, Array(N)).map(Boolean.prototype.valueOf, false);;

  return topSortUtil(g, l, visited, localVisited, q);
}

const printLexOrder = (input) => {
  const g = buildGrap(input);

  console.log('g', g);

  const visited = Array.apply(null, Array(N)).map(Boolean.prototype.valueOf, false);
  const q = [];

  Object.keys(g).forEach((l) => {
    if (!visited[l.charCodeAt()-aAscii]) {
      if (!topSort(g, l, visited, q)) {
        console.log('failed yo')
        return -1;
      }
    }
  })

  return q.join('->')

};


// const input = [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ];

const input =
[
  "wrt",
  "wrf",
  "er",
  "ett",
  'ew',
  'ez',
  "rftt",
  "zr"
]


console.log(printLexOrder(input));
// console.log(printLexOrder(['a', 'b', 'c', 'd', 'a']));

