const drivers = ["Mira", "Alice", "sam", "Mo", "Amer", "Ayla"];
const driverObj = [
  {
    name: "Alice",
    hometown: "IST",
  },
  {
    name: "Mira",
    hometown: "PS",
  },
  {
    name: "sam",
    hometown: "DC",
  },
  { name: "Mo", hometown: "NY" },
];
function findMatching(collection, name) {
  const arr = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].toLowerCase() === name.toLowerCase()) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
function fuzzyMatch(collection, letter) {
  const arr = [];
  for (let i = 0; i < collection.length; i++) {
    if (
      collection[i].slice(0, 1).toLowerCase() ===
      letter.slice(0, 1).toLowerCase()
    ) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
function matchName(collection, string) {
  const nameArr = [];
  collection.map((ele) => {
    if (ele.name.toLowerCase() === string.toLowerCase()) {
      nameArr.push(ele);
    }
  });
  return nameArr;
}
console.log(fuzzyMatch(drivers, "a"));
console.log(findMatching(drivers, "alice"));
console.log(matchName(driverObj, "alice"));