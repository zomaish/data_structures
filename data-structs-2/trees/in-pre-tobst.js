class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}


const inPreToBst = (inO, pre, preIdx, inLeft, inRight) => {
  if (inLeft > inRight) return null;

  const node = new Node(pre[preIdx.idx]);
  preIdx.idx += 1;
  if (inLeft === inRight) return node;

  const inPos = inO.indexOf(node.v);

  node.left = inPreToBst(inO, pre, preIdx, inLeft, inPos -1);
  node.right = inPreToBst(inO, pre, preIdx, inPos +1, inRight);

  return node;
};


const inOrder = ['D', 'B', 'E', 'A', 'F', 'C'];
const preOrder = ['A', 'B', 'D', 'E', 'C', 'F'];
const idx = {
  idx : 0
};
inPreToBst(inOrder, preOrder, idx, 0, inOrder.length);