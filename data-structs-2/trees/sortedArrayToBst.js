class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}


const arrayToBst = (arr) => {
  if (arr.length === 0) return;

  const m = arr.length/2;
  const root = new Node(arr[m]);
  

}

const arr = [1,2,3,4,5,6];

arrayToBst(arr)