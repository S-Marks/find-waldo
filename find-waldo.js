function findWaldo(arr, found) {
  var names = arr;

  names.forEach(found);
}

function actionWhenFound(ele, ind) {
  if (ele === "Waldo")
  console.log("Found Waldo at index " + ind + ".");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
