
class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }

}

const findLCA = (node, p, q) => {

  if (!node) return null;
  if (node.v === p || node.v === q) return node;


  console.log("visited node", node.v)
  const left = findLCA(node.left, p, q);
  const right = findLCA(node.right, p, q);

  if (left&& right) return node;
  if (!left && !right) return null;

  return left || right;
}


const tree = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1;

let n1 = 22, n2 = 12;

const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

console.log(findLCA(root, n1, n2))
 
