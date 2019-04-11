/**
 
  google interview question
  manager at party with employees. If manager attends emplyees have 0 fun. calc max fun employess can have

 */

class Node {
  constructor (v) {
    this.left = this.right = null;
    this.v = v;
  }
}

const calcMaxFun = (root) => {
  if (!root) return 0;

  const left1 = calcMaxFun(root.left);
  const right1 = calcMaxFun(root.right);

  const gchildLeftLeft = root.left ? calcMaxFun(root.left.left) : 0;
  const gchildLefRight = root.left ? calcMaxFun(root.left.right) : 0;

  const gchildRightLeft = root.right ? calcMaxFun(root.right.left) : 0;
  const gchildRightRight = root.right ? calcMaxFun(root.right.right) : 0;

  const sumGchildLeft = gchildLeftLeft + gchildLefRight;
  const sumGchildRight = gchildRightLeft + gchildRightRight;

  const a1= sumGchildLeft + right1;
  const b1 = sumGchildRight + left1;
  const c1 = right1 + left1;
  const d1 = root.v + sumGchildLeft + sumGchildRight;

  return Math.max.apply(null, 
    [
      a1,
      b1,
      c1,
      d1
    ]
  );
};


const root = new Node(5);
root.right = new Node(6);
root.left = new Node (7);
root.left.left = new Node (8);
root.left.right = new Node (4);
root.left.left.left = new Node (2);
// root.left.left.right = new Node (10);
// root.left.right.left = new Node (11);
// root.left.right.right = new Node (25);

console.log('res', calcMaxFun(root));