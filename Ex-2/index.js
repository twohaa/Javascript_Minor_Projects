//Snake,Water,Gun

const match = (comp, you) => {
  // returns 1 if you win,-1 if you lose & 0 for draw

  // draw//ss-gg-ww
  if (you === comp) {
    return "Nobody.Tied!";
  }

  // sw-ws
  if (you == "s" && comp == "w") {
    return "you";
  } else if (you == "w" && comp == "s") {
    return "comp";
  }

  // sg-gs
  if (you == "s" && comp == "g") {
    return "comp";
  } else if (you == "g" && comp == "s") {
    return "you";
  }

  // gw-wg
  if (you == "g" && comp == "w") {
    return "comp";
  } else if (you == "w" && comp == "g") {
    return "you";
  }
};


let you = prompt("Enter s for snake , w for water and g for gun:");
let number = Math.floor(Math.random() * 3);

let comp = ["s", "w", "g"][number];
let result = match(comp, you);

if (result == "Nobody.Tied!") {
  alert("Game Draw!\n");
} else if (result == "you") {
  alert("You Win!\n");
} else {
  alert("Comp win!\n");
}

document.write(`You choose: ${you} <br> Computer choose: ${comp} <br> The winner is : ${result.toUpperCase()}.`);
