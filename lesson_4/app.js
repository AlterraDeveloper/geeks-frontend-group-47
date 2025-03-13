// const originalArray = [7, 45, 12, 11, 9, 47, 25, 152, 8, 96];
const originalArray = [1, 2, 3, 4, 5];
function createCircle(value) {
  const div = document.createElement("div");
  div.className = "array-item";
  div.textContent = value;
  return div;
}

function mapArrayToHtml(array) {
  const divs = array.map(function (value) {
    return createCircle(value);
  });
  return divs;
}

const originalArrayContainer = document.querySelector("#original .array");
mapArrayToHtml(originalArray).forEach(function (div) {
  originalArrayContainer.append(div);
});
// originalArrayContainer.append(...mapArrayToHtml(originalArray));

// [1 2 3]
// ["<div>1</div> <div>2</div> <div>3</div>"]

// map

const marks = [5, 4, 3, 4, 5, 4, 3, 2, 4, 5];
// const usaMarks = ['A', 'B', 'C', 'B']
// const usaMarks = [];
// for (const mark of marks) {
//   let usaMark = "-";
//   usaMark = someFunc();
//   switch (mark) {
//     case 5:
//       usaMark = "a";
//       break;
//     case 4:
//       usaMark = "b";
//       break;
//     case 3:
//       usaMark = "c";
//       break;
//     case 2:
//       usaMark = "d";
//       break;
//     case 1:
//       usaMark = "e";
//       break;
//   }
//   usaMarks.push(usaMark);
// }

const usaMarks = marks
  .map(function (mark) {
    switch (mark) {
      case 5:
        return "a";
      case 4:
        return "b";
      case 3:
        return "c";
      case 2:
        return "d";
      case 1:
        return "e";
    }
  })
  .map((mark) => mark.toUpperCase());

console.log("marks:", marks.join());
console.log("usaMarks:", usaMarks.join());

const updatedArrayContainer = document.querySelector("#updated .array");

const buttons = document.querySelector(".methods");
buttons.onclick = (event) => {
  if (event.target === buttons) return;

  updatedArrayContainer.innerHTML = "";
  const command = event.target.textContent;
  let updated = [];

  if (command === "map +5") {
    updated = originalArray.map((item) => item + 5);
  }

  if (command === "map x2") {
    updated = originalArray.map((item) => item * 2);
  }

  if (command === "filter > 50") {
    updated = originalArray.filter((item) => item > 50);
  }

  if (command === "filter evens") {
    updated = originalArray.filter((item) => item % 2 === 0);
  }

  if (command === "slice top 3") {
    updated = originalArray.slice(0, 3);
  }

  if (command === "slice last 4") {
    updated = originalArray.slice(-4);
    // updated = originalArray.slice(originalArray.length - 4, originalArray.length);
  }

  if (command === "reverse") {
    updated = originalArray.reverse();
  }

  mapArrayToHtml(updated).forEach((div) => {
    updatedArrayContainer.append(div);
  });
};
