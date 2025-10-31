// TODO: Create an array called numbers with values 1 through 5
// TODO: Write a for loop that prints each number in the array
// TODO: Write a while loop that counts down from 5 to 1
// TODO: Create a loop that prints only even numbers from the numbers array
// TODO: Create a loop that calculates the sum of all numbers in the array

let Numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < Numbers.length; i++) {
    console.log(Numbers[i]);
}

let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}

for (let i = 0; i < Numbers.length; i++)
    if (Numbers[i] % 2 === 0) {
        console.log(Numbers[i]);
    }

let sum = 0;
for (let i = 0; i < Numbers.length; i++) {
    sum += Numbers[i];
}
console.log("The sum of all numbers in an array is: " + sum);
