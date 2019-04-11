

const calcLongestTimeUtil = (appts, i) => {
  if (i>= appts.length) return 0;


  return Math.max(
    appts[i] + calcLongestTimeUtil(appts, i+2),
    calcLongestTimeUtil(appts, i+1)
  )
}


const calcLongestTime = (appointments) => {

  const res = calcLongestTimeUtil(appointments, 0);
  console.log('res', res)
};

calcLongestTime([30, 15, 60, 75, 45, 15, 15, 45])