
const gcd = (a, b) => {
  if (b==0) return a;
  return (b, a%b)
}
const isOnSameline = (p1, p2, p3) => {

  const x1Diff = p1[0] - p2[0];
  const x2Diff = p2[0] - p3[0];

  if (x1Diff === 0 && x2Diff === 0) return true;

	const s1 = (p1[1] - p2[1])/x1Diff;
  const s2 = (p2[1] - p3[1]) /x2Diff;

	return !!(s1 === s2);
};


const isSamePoint = (p1, p2) => {
  return p1[0] === p2[0] && p1[1] === p2[1];
};

const maxPoints = (arr) => {
	if (arr.length < 3) return arr.length;
	let maxPoints = 0;
  let pointsSoFar = 0;
  let duplicates1 = 0;

	for (let i=0; i<arr.length; i++) {
    duplicates1 = 0;
    pointsSoFar = 1;
    for (let j=i+1; j<arr.length; j++) {
      if (isSamePoint(arr[i], arr[j])) {
        duplicates1 += 1;
        continue;
      }
      pointsSoFar = 2;
      
      let duplicates2 = 0
      for (let k=j+1; k<arr.length; k++) {
        if (isSamePoint(arr[i], arr[k]) || isSamePoint(arr[j], arr[k])) {
          duplicates2 +=1;
        } else if (isOnSameline(arr[i], arr[j], arr[k])) {
          pointsSoFar +=1;
        }
      }
      maxPoints = Math.max(maxPoints, (pointsSoFar +  duplicates1 + duplicates2));
    }
    maxPoints = Math.max(maxPoints, (pointsSoFar +  duplicates1));
  }

  return maxPoints;
};


//  const points = [[1,1],[1,1],[2,3]]
// const points = [[1,1],[1,1],[2,2],[2,2]]
// const points = [[0,9],[138,429],[115,359],[115,359],[-30,-102],[230,709],[-150,-686],[-135,-613],[-60,-248],[-161,-481],[207,639],[23,79],[-230,-691],[-115,-341],[92,289],[60,336],[-105,-467],[135,701],[-90,-394],[-184,-551],[150,774]];
// const points = [[1,1],[2,2],[3,3]]

const points = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]
 console.log(maxPoints(points));

