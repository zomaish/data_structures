
class Node {
  constructor(v) {
    this.v= v !== undefined ? v : null;
    this.left=this.right=null;
  }
}


const serialize = (node) => {
  if (!node) return "null";


  let res = node.v;
  res += "," + serialize(node.left);
  res += "," + serialize(node.right);

  return res;
};

let idx = 0;
const deserialize = (str) => {
  const arr = str.split(",");

  return deserializeUtil(arr)      
}

const deserializeUtil = (arr, i) => {
 
  if (idx >= arr.length) return;

  if (arr[idx] === "null") return null;

  let node  = new Node(arr[idx]);
  node.left = deserializeUtil(arr, idx++);
  node.right = deserializeUtil(arr, idx++);

  return node
}


const deserialize2 = (str) => {
  const v = str.shift();
  if (v === "null") return null;

  const node = new Node(v);
  node.left = deserialize(str);
  node.right = deserialize(str);

  return node;
};

/**
 * 
    1
   / \
  2   3
     / \
    4   5

as "1,2,null,null,3,4,null,null,5,null,null"
 */


const node = new Node(1);
node.left = new Node(2)
node.right = new Node(3)
node.right.left = new Node(4)
node.right.right = new Node(5)

const ser = serialize(node);
console.log('ser', ser, ser.split(","));
console.log('tree', deserialize(ser))



