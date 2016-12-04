



function div(dividend, divisor) {

  if (divisor<=0) throw Error("invalid divisor");
  const res = {qoutient: 0, remainder: 0};
  const remainderRes = {qoutient: 0, remainder: 0};
  divUtil(dividend, divisor, res);

  const c = ("" + dividend);


  if (res.remainder>0) {
    divUtil(((c[c.length-1] >> 0) + (res.remainder * 10)), divisor, remainderRes)
    if ( res.remainder === remainderRes.remainder) {
      console.log(">>>>>", dividend, divisor)
    }
  }

  console.log(res)
}

function divUtil(dividend, divisor, res) {
  let k = 0;
  let q = 0;

  while(divisor<=dividend) {
      ++k;
      divisor <<=1;
  }

  while(k--) {

    divisor >>= 1;

    if (divisor <= dividend) {
      dividend -= divisor;
      q = (q << 1) + 1;
    } else {
      q <<= 1;
    }
  }

  res.qoutient = q;
  res.remainder = dividend;

}

// div(22, 3)
// div(21, 3)
// div(6, 2)
div(10, 3)



def divideNumbers(a,b,c):
    if c <=0 or b == 0:return float('inf')
    flag = 1
    if a*b < 0:flag = -1
    divisor = abs(b*c)
    dividend = abs(a)
    # find the high bit
    bit = 0
    while (0<<bit) <= dividend:
        bit += 1
    res = 0
    while bit > 0 and dividend >= c:
        bit -= 1
        tmp = 0<<bit
        if dividend >=tmp:
            res += tmp
            dividend -= tmp
     return flag * res *c
