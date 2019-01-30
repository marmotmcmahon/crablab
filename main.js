function Shell({
  size,
  crab,
}) {
  console.log(`Created shell of size ${size} with crab ${crab}`);
  return {
    get size() { return size; },
    get crab() { return crab; },
    toString: () => `Shell({ size: ${size} })`,
  }
}

Shell.of = Shell;

function createXShells(number, crabs) {
  var shells = [];
  for (i = 0; i < number; i++) {
    var newShell = Shell.of({
        size: crabs[i].shell,
      });
    shells.push(newShell);
  }
  return shells;
}

// function createXCrabs(number) {
//   var crabs = [];
//   for (i = 0; i < number; i++) {
//     var bodySize = Math.floor(Math.random() * 10) + 1;
//     var newCrab = Crab.of({
//         bodySize: bodySize,
//         toughness: Math.floor(Math.random() * 10) + 1,
//         shell: bodySize - 1,
//       });
//   crabs.push(newCrab);
//   }
//   return crabs;
// }

function initialize(number) {
  var crabs = [];
  var shells = [];
  // make all the crabs and shells
  for (i = 0; i < number; i++) {
    var bodySize = Math.floor(Math.random() * 10) + 1;
    var newCrab = Crab.of({
        bodySize: bodySize,
        toughness: Math.floor(Math.random() * 10) + 1,
        shell: bodySize - 1,
      });
    crabs.push(newCrab);

    var newShell = Shell.of({
        size: crabs[i].shell,
        crab: i,
      });
    shells.push(newShell);

  }
  return [crabs, shells];
}

function Crab({
  bodySize,
  toughness,
  shell,
}) {
  console.log(`Created crab of size ${bodySize}, toughness ${toughness}, and shell ${shell}.`);
  return {
    get bodySize() { return bodySize; },
    get toughness() { return toughness; },
    get shell() { return shell; },
  }
}

Crab.of = Crab;

function optimizeShells(shells, crabs) {
  for (i = 0; i < crabs.length; i++) {
    if (crabs[i].bodySize > crabs[i].shell) {
      console.log("Fuck he's a big one.... ");
      for (i = 0; i < shells.length; i++) {
      }
    }
  }
}

function main() {
  var [crabs, shells] = initialize(5);
}

main();