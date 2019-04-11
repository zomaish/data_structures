const findMinMeetingRooms = (meetings) => {
  const start = [];
  const end = [];

  for (let i=0; i<meetings.length; i++) {
    const meeting = meetings[i];
    start.push(meeting[0]);
    end.push(meeting[1]);
  }

  start.sort((a,b) => {
    if (a>b) return 1;
    if (a<b) return -1;
    return 0;
  });

  end.sort((a,b) => {
    if (a>b) return 1;
    if (a<b) return -1;
    return 0;
  });


  let i=1;
  let j=0;
  let numRooms = 1;
  let maxRooms = 1;

  while(i<start.length) {

    console.log('start[i]', start[i], 'end[j]', end[j])
    if (start[i]<end[j]) {

      i++;
      numRooms++;
    } else {
      j++
      numRooms--;
    }

    maxRooms = Math.max(maxRooms, numRooms);
  }

  console.log('maxRooms', maxRooms)
};


meetings = [[0, 30],[5, 10],[15, 20]];
findMinMeetingRooms(meetings)
