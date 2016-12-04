
let preIdx = 0;

function constructTree(pre, post, l, r, size) {


  if (l>r || preIdx >= size) return null;
  let root = new Node(pre[preIdx++]);

  if (l===r) return root;

  let i=l;
  for(; i<=r; i++)
    if (pre[preIdx] === post[i])
      break;


  if (i<=h) {
    root.left = constructTree(pre, post, l, i, size);
    root.right = constructTree(pre, post, i+l, r, size);
  }

  return root;


}




let pre = [1, 2, 4, 8, 9, 5, 3, 6, 7];
let post = [8, 9, 4, 5, 2, 6, 7, 3, 1];

let root = constructTree(pre, post, pre.length-2, pre.length-1, pre.length);

console.log(root);
