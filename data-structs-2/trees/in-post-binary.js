class Node {
  constructor(n) {
    this.v = n;
    this.left = this.right = null;
  }
}



const buildTreeUtil = (inO, post, start, end, idx) => {
  
  if (start > end) return null;

  const node = new Node(post[idx[0]])
  idx[0]--;

  if (start === end) {

    console.log("in eq", start, end, 'node is', node.v)
    return node;
  }

  const pos = inO[node.v];
  node.right = buildTreeUtil(inO, post, pos+1, end, idx);
  node.left = buildTreeUtil(inO, post, start, pos-1, idx);

  return node;

};


const buildTree = (inO, post) => {
  const idx = [post.length-1];
  const cache = {};

  inO.forEach((e, i) =>  cache[e] = i);

  return buildTreeUtil(cache, post, 0, inO.length-1, idx);


};

const inO = [ 4, 8, 2, 5, 1, 6, 3, 7 ];
const post = [ 8, 4, 5, 2, 6, 7, 3, 1 ];

console.log(buildTree(inO, post));