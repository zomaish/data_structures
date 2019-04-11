

const moveDisksUtil = (src, dest, buff, n) => {
  // console.log('n is', n)
  if (n<=0) {
    return dest;
  }

  moveDisksUtil(src, buff, dest, n-1);

  console.log('popping form ', src.label, 'adding to ', dest.label)
  dest.arr.push(src.arr.pop());

  moveDisksUtil(buff, dest, src, n-1);

}


const moveDisks = (disks) => {

  const dest = {label: "dest", arr: []};
  const buff = {label: "buff", arr:[]};

  moveDisksUtil({label: "src", arr: disks}, dest, buff, disks.length);


  console.log('dest', dest)
}



const disks = [40, 30, 20, 10];

console.log(moveDisks(disks));