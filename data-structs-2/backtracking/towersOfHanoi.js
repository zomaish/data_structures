
//Time complexity is 2pow n

const disks = {
  'label' : 'src',
  v: [40, 30, 20, 10]
};


const towers = ['A', 'B', 'C'];

const moveDisks = (disks) => {

  const dest = {
      'label' : 'dest',
      v: []
  };
  const buf = {
      'label' : 'buf',
      v: []
  };

  moveDiskUtil(disks, dest, buf, disks.v.length)
}


const moveDiskUtil = (src, dest, buf, n) => {
  if (n<=0) {
      return;
  }

  moveDiskUtil(src, buf, dest, n-1);

  const e = src.v.shift();
  dest.v.unshift(e);

  // console.log('e', e, 'from', src.label, 'to', dest.label)
  // console.log('src', src)
  // console.log('dest', dest)
  // console.log('buf', buf)
  // console.log('-----------------------------------')

  moveDiskUtil(buf, dest, src, n-1);    
}


moveDisks(disks)