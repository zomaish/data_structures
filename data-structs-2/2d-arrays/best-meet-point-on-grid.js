//this min distance is the middle of vertical positions and horizontal positions

const getMinSteps = (gr) => {

  const hr = [];
  const vr = [];

  for (let i=0; i<gr.length;i++) {
    for(let j=0; j<gr[0].length; j++) {
      if (gr[i][j] === 1) {
        hr.push(i);
        vr.push(j);
      }
    }
  }

  hr.sort();
  vr.sort()

  const meetingPoint = [hr[Math.floor(hr.length/2)], vr[Math.floor(vr.length/2)]];

  let dist = 0;

  for (let i=0; i<gr.length;i++) {
    for(let j=0; j<gr[0].length; j++) {
      if (gr[i][j] === 1) {
        dist+= Math.abs(i - meetingPoint[0]) + Math.abs(j-meetingPoint[1])
      }
    }
  }

  return dist

};


const grid = [
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

console.log(getMinSteps(grid))


// const grid = [
//   [1, 0, 1, 0, 1],
//   [0, 1, 0, 0, 0],
//   [0, 1, 1, 0, 0]
// ];