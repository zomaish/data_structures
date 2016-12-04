class Node {
  constructor(n) {
    this.n = n;
    this.left = null;
    this.right = null;
  }
}



function reverseAlternate(root) {
  if (!root) return;
  const arr = [];

  storeAlternate(root, 0, arr);
  arr.reverse();
  console.log(arr)
  replaceNodes(root, 0, arr, 0);
}


function storeAlternate(root, l, arr) {
  if (!root) return;
  if (root.left) storeAlternate(root.left, l+1, arr);
  if (l&1) arr.push(root.n);
  if (root.right) storeAlternate(root.right, l+1, arr);
}

function replaceNodes(root, l, arr, i) {
  if (!root) return;
  
  if (root.left) replaceNodes(root.left, l+1, arr, i);
  if (l&1) {
    root.n = arr.shift();
  }
  if (root.right) replaceNodes(root.right, l+1, arr, i);
}

function inOrderTraversal(root) {
  if (!root) return;
  
  if (root.left) inOrderTraversal(root.left);
  console.log(">>", root.n);
  if (root.right) inOrderTraversal(root.right);
}



const root = new Node('a');
root.left = new Node('b');
root.right = new Node('c');
root.left.left = new Node('d');
root.left.right = new Node('e');
root.right.left = new Node('f');
root.right.right = new Node('g');
root.left.left.left = new Node('h');
root.left.left.right = new Node('i');
root.left.right.left = new Node('j');
root.left.right.right = new Node('k');
root.right.left.left = new Node('l');
root.right.left.right = new Node('m');
root.right.right.left = new Node('n');
root.right.right.right = new Node('o');

//printInorder(root);

reverseAlternate(root);

inOrderTraversal(root);


/**
Inorder Traversal of given tree
h d i b j e k a l f m c n g o

Inorder Traversal of modified tree
o d n c m e l a k f j b i g h
**/

/**

               a
            /     \
           b       c
         /  \     /  \
        d    e    f    g
       / \  / \  / \  / \
       h  i j  k l  m  n  o 


Modified tree:
               a
            /     \
           c       b
         /  \     /  \
        d    e    f    g
       / \  / \  / \  / \
      o  n m  l k  j  i  h 


["h","i","b","j","k","l","m","c","n","o"] 

Inorder Traversal of given tree
h d i b j e k a l f m c n g o

Inorder Traversal of modified tree
o d n c m e l a k f j b i g h
**/