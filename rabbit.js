let pos = Math.floor(Math.random() * 30);
let len = 30;
let prev = pos;

console.log(pos);
console.log(prev);

function step() {
  if (pos == len) {
    pos--;
  } else if (pos == 0) {
    pos++;
  } else if (Math.random() < 0.5) {
    pos++;
  } else {
    pos--;
  }
  console.log("Rabbit is at ", pos);
}
let found = true;
for (let i = 0; i < len; i++) {
  let attempt = i;
  console.log(i);
  if (attempt == pos) {
    found = false;
    console.log("found rabbit at", pos);
    break;
  }
  step();
}

if (found) {
  for (let i = 1; i < len; i++) {
    let attempt = i;
    console.log(i);
    if (attempt == pos) {
      found = false;
      console.log("found rabbit at", pos);
      break;
    }
    step();
  }
}

if (found) {
  console.log("game over");
}
