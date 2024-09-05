/*Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'

*/

const statement = 'I am a hard working person'
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
const output = reverseWords(statement);
console.log(output); 

//output-PS C:\Projects(js)\array-looping-task1> node ./task-4.js
//person working hard a am I