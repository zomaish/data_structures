const isSafe = (path, box) => {
  const n = path.length;
  if (n === 0) return true;

  const c = path[n-1];
  return (
      box.width < c.width &&
      box.length < c.length &&
      box.height < c.height
  );
}

const findTallestStackBackTrackingUtil = (boxes, res, h, path, idx, n) => {
  if (idx === n) {
      let f = 0;
      for(let i = 0; i<path.length; i++) 
      f += path[i].height;

      return f;
  }

  for (let i=idx; i<n; i++) {
      const box = boxes[i];
      if (isSafe(path, box)) {
          h += box.height;
          path.push(box);

          const t = findTallestStackBackTrackingUtil(boxes, res, h, path, i+1, n)

          if (t > res.h) {
              res.h = t;
              res.path = [...path]
          };

          path.pop();
      }
  }

  return 0;
}

const findTallestStackBackTracking = (boxes) => {
  boxes.sort((a, b) => {
    if (a.width*a.l > b.width*b.l) return -1;
    if (a.width*a.l < b.width*b.l) return 1;
    return 0;
  });
  const res = {
    h: 0,
    path: []
  };
  const path = []
  findTallestStackBackTrackingUtil(boxes, res, 0, path, 0, boxes.length);

  console.log('res', res)
};



const isSafeDP = (boxes, i, j) => {
  if (i===j) return false;

  const a = boxes[i];
  const b = boxes[j];

  return (
    b.width < a.width &&
    b.length < a.length
);

}


const tallestStackDP = (boxes) => {
  boxes.sort((a, b) => {
    const da = a.width*a.length*a.height;
    const db = b.width*b.length*b.height
    if (da > db) return -1;
    if (da < db) return 1;
    return 0;
  });

console.log(boxes)

  const n = boxes.length;
  const height = Array.apply(null, Array(n)).map((e, i) => boxes[i].height);
  const parent = Array.apply(null, Array(n)).map((e, i) => i);

  for (let k=1; k<n; k++) {
    for (let i=0, j=k; j<n; j++, i++) {
      if (isSafeDP(boxes, i, j)) {
        const temp = height[i] + boxes[j].height;

        if (temp > height[j]) {
          height[j] = temp;
          parent[j] = i;
        } 
      }
    }
  }

  console.log(height, parent)

};



const tBTMemUtil = (boxes, res, idx, n) => {
  if (idx === n) {
    return;
  }


  const box = boxes[idx];

  if (!res || isSafe(res, box)) {
    res.push(box);
  }

}

const tallestBackTrackingPlusMemo = (boxes) => {

  boxes.sort((a, b) => {
    const da = a.width*a.length*a.height;
    const db = b.width*b.length*b.height
    if (da > db) return -1;
    if (da < db) return 1;
    return 0;
  });

  const res = [];


  tBTMemUtil(boxes, res, 0, boxes.length);
}




class Box {
  constructor(w, l, h) {
      this.width = w;
      this.length = l;
      this.height = h;
  }
}

const boxes = [
  new Box(1, 7, 4),
  new Box(2, 6, 9),
  new Box(4, 9, 6),
  new Box(10, 12, 8),
  new Box(6, 2, 5),
  new Box(3, 8, 5),
  new Box(5, 7, 7),
  new Box(2, 10, 16),
  new Box(12, 15, 9),
];
//[(12, 15, 9), (10, 12, 8), (4, 9, 6), (3, 8, 5), (1, 7, 4)]
// findTallestStackBackTracking(boxes);
tallestStackDP(boxes)