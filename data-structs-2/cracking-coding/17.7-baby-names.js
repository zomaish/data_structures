

const getPosition = (names, name) => {
  for (let i=0; i<names.length; i++) {
    if (names[i][0] === name) return i;
  }
}

const getParent = (parent, i) => {
  while(i !== parent[i]) {
    parent[i] = parent[parent[i]];
    i = parent[i];
  }

  return i;
}

const union = (parent, rank, x, y) => {
  if (x===undefined || y === undefined) return;

  if (rank[x] > rank[y]) {
    parent[y] = x;
    rank[x] += rank[y];
  } else {
    parent[x] = y;
    rank[y] += rank[x];
  }
}

const countNames = (names, synonyms) => {
  const parent = Array.apply(null, Array(names.length)).map((e, i) => i);
  const rank = Array.apply(null, Array(names.length)).map(Number.prototype.valueOf, 1);
  
  synonyms.forEach((arr) => {
    const parent1 = getParent(parent, getPosition(names, arr[0]));
    const parent2 = getParent(parent, getPosition(names, arr[1]));


    console.log('finding name', arr[0], parent1)
    console.log('finding name', arr[1], parent2)
    if (parent1 !== parent2) {
      union(parent, rank, parent1, parent2)
    }
  })

  const counts = {};

  console.log('parent', parent)

  for (let i=0; i<parent.length; i++) {
    const name = names[parent[i]][0];
    const count = names[parent[i]][1];
    if (!counts[name]) {
      counts[name] = count;
    } else {
      counts[name] += count;
    }
  }

  console.log(counts);
};



const countNames = (names, syn) => {
  const parentMap = {};
  const parentNames = [];
  
  let i = 1;
  syn.forEach((arr)=> {
    const parentName = arr[0];
    parentMap[parentName] = parentMap[parentName] || i++;
    parentMap[arr[1]] =  parentMap[arr[0]];
    parentNames[parentMap[arr[0]]] = parentName;
  });

  const counts = Array.apply(null, Array(i)).map((e, i) => ({
    name: parentNames[i], count: 0
  }))
  console.log(parentMap)

  names.forEach((nameArr) => {
    const name = nameArr[0];
    const count = nameArr[1];
    
    const parentPos = parentMap[name]
    counts[parentPos].count += count;
  });

  console.log('count', counts)
};



const names = [['john', 15], ['jon', 12], ['chris', 13], ['kris', 4], ['christopher', 19]];
const synonyms = [['john', 'jon'], ['john', 'johnny'], ['chris', 'kris'], ['chris', 'christopher']];

countNames(names, synonyms);

const names = [['john', 15], ['jon', 12], ['chris', 13], ['kris', 4], ['christopher', 19]];
const synonyms = [['john', 'jon'], ['john', 'johnny'], ['chris', 'kris'], ['chris', 'christopher']];

countNames(names, synonyms);
