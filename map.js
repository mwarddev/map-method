  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for(let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()
const multiByTwo = function(num) {
  return num * 2;
}
const mapResults = nums.map(multiByTwo);
console.log(mapResults);

// Simplified w/ map()
// Simplify attempt
console.log(nums.map(n => n * 2));
// Instructor's simplify
const mapResults2 = nums.map(function(num) {return num * 2});
console.log(mapResults2);

// Simplfied w/ map() + arrow function
const arrow = nums.map(n => n * 2);
console.log(arrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

const studentObjects = students.map(student => ({name: student.name, id: student.id, skill: student.skill}));
console.log(studentObjects);
