class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}

const isBalanced = (node) => {

  if (!node) return true;
 
   const hl = getTreeHeight(node.left);
   const hr = getTreeHeight(node.right);
 
   if (Math.abs(hl-hr) > 1) return false;
 
   if (!isBalanced(node.left) || !isBalanced(node.right)) {
     return false;
   }
 
   return true;
 };
