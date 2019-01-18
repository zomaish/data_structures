

class Player {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

let max = 0;

const getTotalHeights = (s) => {
  let t = 0;
  for (i=0; i<s.length; i++)
    t += s[i].height;

  return t;
}

const canAddToStack = (s, player) => {
  if (!s.length) return true;

  const top = s[s.length-1]
  return top.height > player.height && top.weight > player.weight;
};

const isInStack = (s, player) => {
  return s[s.length-1] === player
};

const findTallestStackUtil = (players, s, idx) => {
  if (idx === players.length) {

    console.log('idx', idx, 'stack at the end', s)
    console.log();console.log();
    const totalHeights = getTotalHeights(s);
    if (totalHeights > max) {
      max = totalHeights;
      console.log('max ', max, 'players', JSON.stringify(s));
    }

    return;
  }

  const player = players[idx];
  if (canAddToStack(s, player))
    s.push(player)

  findTallestStackUtil(players, s, idx +1);

  if (isInStack(s, player)) {
    s.pop()
  }
  findTallestStackUtil(players, s, idx +1);
};

const findTallestStack = (players) => {
  players.sort((a, b) => {
    if (a.height > b.height) return -1;
    if (a.height < b.height) return 1;

    if (a.weight > b.weight) return -1;
    if (a.weight < b.weight) return 1;

    return 0;
  });

  
  const s = [];

  findTallestStackUtil(players, s, 0);

  console.log('the final result is ', JSON.stringify(s))
};

const players = [
  new Player(10, 19), new Player(11, 20), new Player(10, 1), new Player(1, 5), new Player(3, 8), new Player(7, 12)
];

findTallestStack(players);
