



const findMedian = (stream) => {

  const s = new maxHeap((stream.length/2|0)+1);
  const g = new minHeap((stream.length/2|0)+1);

  s.push(stream[0]);
  let median = stream[0];

  for (let i=0; i<stream.length; i++) {
    const el = stream[i];

    if (s.length > g.length) {
      if (e>=median) {
        g.push(e)
      } else {
        g.push(s.extractmax())
        s.push(e)
      }

      median = (s.getTop() + g.getTop()) /2 |0
    } else if (g.length>s.length) {
      if (e>=median) {
        s.push(g.extractMin());
        g.push(e)
      } else {
        s.push(e);
      }

      median = (s.getTop() + g.getTop()) /2 |0
    } else {
      if (e>=median) {
        g.push(e)
      } else {
        s.push(e)
      }

      median = e;
    }
  }
};

const stream = [5, 15, 10, 20, 3];

console.log(findMedian(stream))