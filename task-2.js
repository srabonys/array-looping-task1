/*Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 78, 46]---------------*/


const numbers = [12, 98, 5, 41, 23, 78, 46];
    const isEven = (numbers) => {
      const even = numbers.filter(numbers => numbers % 2 === 0);
      return even ;
    };

    console.log(isEven(numbers));

    /*output-PS C:\Projects(js)\array-looping-task1> node ./task-2.js
[ 12, 98, 78, 46 ]*/