
/**
proto
empty()
preorder
inorder
postOrder
size
clear
height
insert
**/



class Node {
  constructor(n) {
    this.n = n >> 0;
    this.left = null;
    this.right = null;
  }

  isNode() {
    if (this instanceof Node) return "Node";
  }
}


class BST {
  constructor() {
    this.root = null;
  }

  empty(node) {
    return (node && node.data !== null);
  }

  push(n) {
    if (!this.root) {
      this.root = new Node(n);
        return;
    }

    this.insert(this.root, n);
  }


  insert(node, n) {
    if (!node) return new Node(n);

    if (node.n >= n) node.left = this.insert(node.left, n);
    else node.right = this.insert(node.right, n);

    return node;
  }

  remove(data, node) {
    if (!node) this.root = this.remove(data, this.root)
    else if (node.data > data) node.left = this.remove(data, node.left);
    else if (node.data < data) node.right = this.remove(data, node.right);
    else {
      if (node.left && node.right) {
        node.data = this.minVal(node.right);
        node.right = this.remove(node.data, node.right);
      } else {
        node = node.left || node.right;
      }
    }
    return node;
  }
}

  find(n) {
    return this.lookup(this.root, n);
  }

  lookup(node, n) {
    if (!node || node.data === target) return node;

    if (node.data > target) return this.search(node.left, target);
    else return this.search(node.right, target);
  }

  size() {
    return this.count(this.root);
  }

  count(node) {
    if (!node) return 0;

    return this.count(node.left) + 1 + this.count(node.right);
  }

  maxDepth() {
    return this.height(this.root);
  }

  height(node) {
    if (!node)
      return 0;

      return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }
  
  minDepth(node) {
    if (node === null)
      return 0;
    if (node.left === null && node.right)
      return 1;
    
    if (!node.left)
      return 1+ minDepth(node.right);
    if (!node.right)
        return 1+ minDepth(node.left);
    
    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
  }

  minVal() {
    return this.getMinVal(this.root);
  }

  getMinVal(node) {
    if (!node.left) return node.n;
    return this.getMinVal(node.left);
  }

  printTree(node) {
  if (!node) return;

    this.printTree(node.left);
    this.printTree(node.right);

    console.log(node.n);
  }

  printPath(node) {
    this.printPathRec(node, [], 0)
  }

  inOrderTraverse(node) {
    if (!node) return;

    this.inOrderTraverse(node.left);
    console.log(node.data, ",")
    this.inOrderTraverse(node.right);
  }

  preOrderTraverse(node) {
    if (node === null) return;

    console.log(node.data);
    this.preOrderTraverse(node.left);
    this.preOrderTraverse(node.right);
  }

  postOrderTraverse(node) {
    if (node === null) return;

    this.postOrderTraverse(node.left);
    this.postOrderTraverse(node.right);
    console.log(node.data);
  }


  printPathRec(node, path, idx) {
    if (!node) return;

    path[idx] = node.n;
    ++idx;

    if (!node.left && !node.right) {
    console.log(path.join("->"));
    } else {
      this.printPathRec(node.right, path, idx);
      this.printPathRec(node.left, path, idx);
    }
  }


  mirror(node) {
    if (!node) return;

    this.mirror(node.left);
    this.mirror(node.right);

    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }

   doubleTree(node) {
     if (!node) return;

     this.doubleTree(node.left);
     this.doubleTree(node.right);

     let temp = node.left;
     node.left = new Node(node.n);
     node.left.left = temp;
   }


  sameTree(node, node2, res) {
    if (!node && !node2) {
      return true;
    } else if (node && node2) {
      return (
        (node.n == node2.n)
        && this.sameTree(node.left, node2.left)
        && this.sameTree(node.right, node2.right)
      );
    } else {
      return false;
    }
  }

  toArr() {
    let arr = [this.root.d];
    this.toArrRec(this.root, arr);

    return arr;
  }

  toArrRec(node, arr) {
    if (!node) return;

    let left = node.left;
    let right = node.right;

    if (left) arr.push(left.d);
    if (right) arr.push(right.d);

    this.toArrRec(left, arr);
    this.toArrRec(right, arr);
  }

  toArrBF() {
    let currNode = this.root;
    let arr = [];

    arr.push(currNode.d);

    let children = this.getChildren(currNode);

    for (let i=0; i<children.length; i++) {
      currNode = children[i];
      children = children.concat(this.getChildren(currNode));

      arr.push(currNode.d);
    }

    console.log(arr.join());
  }

  getChildren(node) {
    let arr = [];
    if (node.left) arr.push(node.left);
    if (node.right) arr.push(node.right);
    return arr;
  }

  depthFirstSearch(node, searchValue) {
    console.log(searchValue+": "+node.n);
    if(node.n === searchValue) {
        console.log("search item found");
        return true;
    } else if(searchValue < node.n && node.left !== null) {
        return this.depthFirstSearch(node.left, searchValue);
    } else if(searchValue > node.n && node.right !== null) {
        return this.depthFirstSearch(node.right, searchValue);
    } else {
        console.log("could not find "+searchValue);
        return false;
    }
  }

  breadthFirstTraversal() {
    console.log("Breadth First Traversal");

    // For our intensive purposes,
    // our array is acting as a queue for us.
    var queue = [],
        current = this.root;

    if(current !== null) {
        queue.push(current);
    }

    // start off enqueing root
    while(queue.length > 0) {
      var tempNode = queue.shift();
      console.log(tempNode.value); // Visit current node
      if(tempNode.left !== null) {
          queue.push(tempNode.left);
      }
      if(tempNode.right !== null) {
          queue.push(tempNode.right);
      }
    }
  }

}


const mbt = new BST();

mbt.push(2);
mbt.push(1);
mbt.push(3);



const mbt2 = new BST();

mbt2.push(2);
mbt2.push(1);
mbt2.push(3);
mbt2.push(2);

/*
mbt.push(3)
mbt.push(2)
mbt.push(6)
mbt.push(5)
mbt.push(2)
mbt.push(7)
mbt.push(3)
mbt.push(4)
mbt.push(9)
mbt.push(8)
mbt.push(1)
*/



console.log(mbt.sameTree(mbt.root, mbt.root))

//mbt.doubleTree(mbt.root);

//console.log(mbt.root)

//mbt.printPath(mbt.root);
//mbt.mirror(mbt.root);
//mbt.printPath(mbt.root);
//console.log(mbt.root)
//console.log(mbt.printOrderedTree(mbt.root))
//console.log(mbt.printTree(mbt.root))
//mbt.maxDepth()
//console.log(mbt.maxDepth())
