// // // QUESTION 01)Declare an empty array using JS literal notation to store
// // // student names in future.

// // var studentName = [];

// // // QUESTION 02)Declare an empty array using JS object notation to store
// // // student names in future.

// // var studentName = new Array();

// // // QUESTION 03)Declare and initialize a strings array.

// // let stringArray = ["zeeshan", "aftab"];

// // // QUESTION 04)Declare and initialize a numbers array.

// // let numberArray = [123,43,465,867,34,1];

// // // QUESTION 05)Declare and initialize a boolean array.

// // let booleanArray = [true ,false];

// // // QUESTION 06)Declare and initialize a mixed array.

// // let mixedArray = ["zeeshan", true, 123];

// // // QUESTION 07)Declare and Initialize an array and store available
// // // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // // BS, BCOM, MS, M. Phil., PhD).

// // let availableEducation = ["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM", "6) MS", "7) M. Phil.", "8) PhD)."];
// // document.write(`<h1>Qualifications</h1>`)
// // // document.write(`${availableEducation}</br>`)
// // for(let i of availableEducation){
// //     document.write(`${i}</br>`);
// // }

// // QUESTION 08)Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

// // let studentName = ["zeeshan", "huzaifa", "aftab"];
// // let studentScore = [435, 334, 450];

// // document.write(
// //   `Score of ${studentName[0]} is ${studentScore[0]}. percentage: ${
// //     (studentScore[0] / 500) * 100
// //   }% </br>Score of ${studentName[1]} is ${studentScore[1]}. percentage: ${
// //     (studentScore[1] / 500) * 100
// //   }% </br>Score of ${studentName[2]} is ${studentScore[2]}. percentage: ${
// //     (studentScore[2] / 500) * 100
// //   }% </br>`
// // );

// // QUESTION 09)Initialize an array with color names. Display the array
// // elements in your browser.

// let colorNames =["red","green","blue"];
// // // document.write(`${colorNames}<br/>`)

// // // a. Ask the user what color he/she wants to add to the
// // // beginning & add that color to the beginning of the array.
// // // Display the updated array in your browser.

// // let askUserColor = prompt["what color you want add in the beggining of an array."];
// // colorNames.unshift(askUserColor)
// // document.write(`${colorNames}<br/>`)

// // // // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

// let askUser2 = prompt("What color you want to add to the end of the array");
// colorNames.push(askUser2);
// document.write(`${colorNames}<br/>`);

// // c. Add two more color to the beginning of the array.Display the updated array in your browser.

// colorNames.unshift("yellow","white")
// document.write(`${colorNames}</br>`)

// // d. Delete the first color in the array. Display the updatedarray in your browser.

// colorNames.shift();
// document.write(`${colorNames}</br>`)

// // e. Delete the last color in the array. Display the updatedarray in your browser.

// colorNames.pop();
// document.write(`${colorNames}</br>`)

// // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
// // position/index. . Display the updated array in your browser.

// let colorIndex = +prompt("at which index you want a color");
// let colorName = prompt("which clor you want to add");
// colorNames[colorIndex] =colorName
// document.write(colorNames)

// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// let indexOfColor = +prompt("At which index you want to delete a color");
// let numberOfColors = +prompt("How many colors you want to delete");
// colorNames.splice(indexOfColor,numberOfColors)
// document.write(colorNames);

// QUESTION 10) Write a program to store student scores in an array & sort the array in ascending order using Array’s sortmethod.

// let scoreOfStudents = ["320", "230", "480", "120"];
// document.write(`Scores of Student ${scoreOfStudents}</br>`)
// scoreOfStudents.sort((a, b) => a - b);  //Ascending order
// // scoreOfStudents.sort((a, b) => b - a);  //Descending order
// document.write(`ordered scores of student: ${scoreOfStudents}`);

// QUESTION 11) Write a program to initialize an array with city names. Copy 3 array elements from cities  array to selectedCities array.

// let citiesList = ["karachi","islamabad","queta","peshawar","lahore"];
// document.write(`Cities List: </br> ${citiesList}<br/>`);
// let selectedCities = citiesList.slice(2,4);
// document.write(`Selected cities: </br> ${selectedCities}`);

// QUESTION12) Write a program to create a single string from the below mentioned array:

// var arr = ["This","is","my","cat"];
// document.write(`<h2>Array:<h2/>${arr}<br/>`);
// document.write(`<h3>String:<h3/>${arr.join(" ")}<br/>`)

// QUESTION 13) Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// let devices = new Array("Keyyboard","Mouse","Printer","Monitor");
// document.write(`<h2> Devices: <h2/> ${devices}<br/>`);
// for(let i of devices){
//     document.write(`<br/>OUT:<br/>${i}<br/>`)
// }

// QUESTION 14) Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

// let devicesReverse = new Array("Keyboard","Mouse","Printer","Monitor");
// document.write(`<h3>Devices:<h3/> ${devicesReverse}`);
// devicesReverse.reverse();

// for(let i of devicesReverse){
//     document.write(`<br/>OUT:<br/>${i}`)
// };

// QUESTION 15)Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in yourbrowser using document.write() method:

let mobileBrand = ["Apple", "Samsung", "Motorla", "Nokia", "Sony", "Haier"];
document.write(`<h1>Phone Manufacture:<h1/>
<select>
<option value="">${mobileBrand[0]}</option>
<option value="">${mobileBrand[1]}</option>
<option value="">${mobileBrand[2]}</option>
<option value="">${mobileBrand[3]}</option>
<option value="">${mobileBrand[4]}</option>
<option value="">${mobileBrand[5]}</option>
<option value="">${mobileBrand[6]}</option>
</select>
`);
