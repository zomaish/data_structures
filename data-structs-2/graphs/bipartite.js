/**
When modelling relations between two different classes of objects, bipartite graphs very often arise naturally.
For instance, a graph of football players and clubs, with an edge between a player and a club if the player has 
played for that club, is a natural example of an affiliation network, a type of bipartite graph used in social 
network analysis.

Another example where bipartite graphs appear naturally is in the (NP-complete) railway optimization problem, 
in which the input is a schedule of trains and their stops, and the goal is to find a set of train stations 
as small as possible such that every train visits at least one of the chosen stations. 
This problem can be modeled as a dominating set problem in a bipartite graph that has a vertex for each 
train and each station and an edge for each pair of a station and a train that stops at that station.

A third example is in the academic field of numismatics. Ancient coins are made using two positive impressions 
of the design (the obverse and reverse). 
The charts numismatists produce to represent the production of coins are bipartite graphs.

check if graph has cycle of odd nodes
*/

const isBipartite = (g, src) => {
  const colorArr = Array.apply(null, Array(g.length)).map(Number.prototype.valueOf, -1);
  const q = [src];
  let c;

  colorArr[src] = 1;
  while(q.length) {
    u = q.shift();

    //cycle
    if (g[u][u] === 1) return false;

    for (let j=0; j<g.length; j++) {
      if (g[u][v] === 1 && colorArr[v] === -1) {
        colorArr[v] = 1-colorArr[u];
        q.push(v);
      } else if (g[u][v] === 1 && colorArr[u] === colorArr[v]) {
        return false;
      }
    }
  }
  
  return true;
}


const G = [
  [0, 1, 0, 1], 
    [1, 0, 1, 0], 
    [0, 1, 0, 1], 
    [1, 0, 1, 0]
]; 
                            
console.log(isBipartite(G, 0))