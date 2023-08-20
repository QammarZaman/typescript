// Write the program to calculate the sum of even numbers between 1 to 100
let i: number = 1;
let sum: number = 0;
let list: number[] = [];
while (i <= 100) {
  if (i % 2 === 0) {
    sum += i;
    list.push(i);
  }
  i++;
}
console.log(sum, list);
