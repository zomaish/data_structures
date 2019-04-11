



const getSlope = (points) => {

  console.log('points are ', points, points[0][1] ,'-', points[1][1], points[0][0], '-', points[1][0])
  return (points[0][1] - points[1][1])/(points[0][0] - points[1][0])
}

const clacIntercept = (points, slope) => {
  return points[1][1] - slope*points[1][0];
}




const findIntersectionPoint = (points) => {
  const p1 = points[0];
  const p2 = points[1];

  const p1Slope = getSlope(p1);
  const p2Slope = getSlope(p2);

  console.log('slopes', p1Slope, p2Slope)

  const p1YIntercept = clacIntercept(p1, p1Slope);
  const p2YIntercept = clacIntercept(p2, p2Slope);

  console.log('p1YIntercept', p1YIntercept, p2YIntercept)

  const x = (p2YIntercept-p1YIntercept) / (p1Slope - p2Slope)
  const y = p1Slope*p1[0][0] + p1YIntercept;

  return [x, y]

};


const points = [
  [
    [1,1], [4,4]
  ],
  [
    [1,8], [2,4]
  ]
];

console.log(findIntersectionPoint(points))
