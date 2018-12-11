

const sortInsert = (s, e) => {
  if (!s.length || e<s[s.length-1]) {
    s.push(e);
    return;
  }

  if (e > s[s.length-1]) {
    const x = s.pop();
    sortInsert(s, e);
    s.push(x);
    return;
  }
};

const sortStack = (s) => {
  if (s.length) {
    const e = s.pop();
    sortStack(s);

    sortInsert(s, e);
  }
};

const s = [-3, 14, 18, -5, 30, 12]


sortStack(s)
console.log(s);