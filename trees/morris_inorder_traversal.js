//O(n) + O(1) extra space

class Node {constructor(d) {this.d = d;this.left = null;this.right = null;}}

function MorrisTraversal(root) {
  let current = root;
  
  while(current) {
    if (!current.left) {
      console.log(current.d);
      current = current.right;
    } else{
      let pre = current.left;
      
      while(pre.right && pre.right !==current)
        pre = pre.right;
      
      if (!pre.right) {
        pre.right = current;
        current = current.left;
      } else {
        console.log(current.d);
        current = current.right;
      }
      
    }
  }
}

const root = new Node(1);
root.left        = new Node(2);
root.right       = new Node(3);
root.left.left  = new Node(4);
root.left.right = new Node(5); 

MorrisTraversal(root);