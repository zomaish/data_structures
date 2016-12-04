
class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}


const isValidBST = (node) => {

  
}



const bst = new Node(1);
bst.left = new Node(2)
bst.right = new Node(3)

bst.left.left = new Node(4)
bst.left.right = new Node(5)
bst.right.left = new Node(6)
bst.right.right = new Node(7)

bst.left.left.left = new Node(8)
bst.left.left.right = new Node(9)
bst.left.right.left = new Node(10)
bst.left.right.right = new Node(11)

bst.right.left.left = new Node(12)
bst.right.left.right = new Node(13)
bst.right.right.left = new Node(14)
bst.right.right.right = new Node(15)