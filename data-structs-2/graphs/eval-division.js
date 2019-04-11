//https://leetcode.com/problems/evaluate-division/



const getKey = (a, b) => `${a} / ${b}`;

const buildGraph = (ops, res, map, vals) => {

  for (let i=0; i<ops.length; i++) {
    const op = ops[i];

    const x = op[0];
    const y = op[1];
    if (!map[x]) {
      map[x] = []
    }

    if(!map[y]) {
      map[y] = [];
    }

    map[x].push(y);
    map[y].push(x);

    vals[getKey(x, y)] = res[i];
    vals[getKey(y, x)] = (1/res[i]).toFixed(4);
  }
}

const dfs = (start, end, g, visited, vals, total, pos, res) => {
  if (!g[start] || !g[end]) return;

  if (start === end) {
    res[pos] = total;
  }

  const neighbors = g[start];

  visited[start] = true;
  neighbors.forEach(n => {
    const k = getKey(start, n)
    if (!visited[n]) {
      dfs(n, end, g, visited, vals, total*vals[k], pos, res)
    }
  })

}
const resolveQueries = (queries, vals, g, res) => {

  for (let i=0; i<queries.length; i++) {
    const query = queries[i];
    const visited = {}

    dfs(query[0], query[1], g, visited, vals, 1, i, res)

  }
};

const calcEquation = (ops, res, queries) => {
  const g = {};
  const vals = {};
  const allres = Array(queries.length).fill(-1);

  buildGraph(ops, res, g, vals);
  resolveQueries(queries, vals, g, allres)

  return allres;
};




const ops = [["a", "b"], ["b", "c"]]
const res = [2.0, 3.0]

/**
Given a / b = 2.0, b / c = 3.0. 
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? . 
return [6.0, 0.5, -1.0, 1.0, -1.0 ].




 */


const queries = [ ["a","c"],["b","c"],["a","e"],["a","a"],["x","x"] ];

calcEquation(ops, res, queries);

