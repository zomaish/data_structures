class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}

const levelOrderTraversalRec = (node) => {
  const height = getHeight(node);

  for (let i=1; i<=height; i++)
    printLevelNode(node, i);
};

const printLevelNode = (node, level) => {
  if (!node) return
  if (level === 1) {
    console.log(node.v);
    return;
  }
  printLevelNode(node.left, level-1)
  printLevelNode(node.right, level-1)
};

const getHeight = (node) => {
  if (!node) return 0;
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
};

const levelOrderTraversalQueue = (node) => {
  const q = [node];
  while(q.length) {
    const temp = q.shift();
    console.log(temp.v);
    if (temp.left) q.push(temp.left);
    if(temp.right) q.push(temp.right)
  }
}


const tree = new Node(1);
tree.left= new Node(2); 
tree.right= new Node(3); 
tree.left.left= new Node(4); 
tree.left.right= new Node(5); 
  
// levelOrderTraversalRec(tree); 
levelOrderTraversalQueue(tree); 