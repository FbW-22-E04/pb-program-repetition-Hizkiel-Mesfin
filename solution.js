//#1

let i = 0;

while (i < 15) {
  console.log(i);
  i++;
}

//#2

let total = 0;

let j = 1;

while (j <= 20) {
  total += j;
  j++;
}

console.log("This is the  total", total);

//#3

let p = 0;

do {
  console.log(`The number is ${p} while ${p} is less than 20`);
  p++;
} while (p < 20);
