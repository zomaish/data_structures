//https://leetcode.com/problems/minimize-malware-spread/

//graph coloring
const dfs = (g, u, colors, c) => {
  const cols = g[0].length;

  colors[u] = c;
  for(let i=0; i<cols; i++) {
    if (g[u][i] === 1 && colors[i] === -1) {
      dfs(g, i, colors, c);
    }
  }
}


const minMalwareSpread = (g, inital) => {
  const r = g.length;
  const c = g[0].length;

  const colors = new Array(r).fill(-1);
  let color = 0;

  for (let i=0; i<r; i++) {
    if (colors[i] === -1) {
      dfs(g, i, colors, color++)
    }
  }

  const size = new Array(color).fill(0);

  colors.forEach(c => {
    size[c]++;
  });
  const initialCount = new Array(color).fill(0);

  initial.forEach(n => {
    initialCount[colors[n]] +=  1;
  });

  let ans = Number.MAX_SAFE_INTEGER;

  for (let i=0; i<initial.length; i++) {
    const node = inital[i];
    const c = colors[node];
    if (initialCount[c] === 1) {
      if (ans === Number.MAX_SAFE_INTEGER) {
        ans = node;
      } else if(size[c] < size[colors[ans]]) {
        ans = node
      } else if (size[c] === size[colors[ans]] && node < ans) {
        node = ans;
      }
    }
  }

  if (ans === Number.MAX_SAFE_INTEGER) {
    ans = Math.min.apply(null, inital);
  }
  
  return ans;

};

// const g=[[1,1,0],[1,1,0],[0,0,1]], initial = [0,1];
const g=[[1,0,0],[0,1,0],[0,0,1]], initial = [1, 2];

console.log(minMalwareSpread(g, initial));