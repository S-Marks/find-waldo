// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
/*  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }*/

  var names = arr;

  names.forEach(found);
}

function actionWhenFound(ele, ind) {
  if (ele === "Waldo")
  console.log("Found Waldo at index " + ind + ".");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

/*
Modify callback function.
Get index of Waldo.

Output: "Found Waldo at index 2."

instead of for loop, use forEach

*/