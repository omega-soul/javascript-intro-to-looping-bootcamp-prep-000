function forLoop(array) {
  for (let i = 0; i < 24; i++) {
  if (i === 1) {
    array.push("I am 1 strange loop.");
  } else (i > 1); {
    array.push("I am ${i} strange loops");
  }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
     console.log(--n);
}
  return ("done");
}

function doWhileLoop(array) {
  do {
    console.log(--array);
  } while (array>=0);
  return array;
}