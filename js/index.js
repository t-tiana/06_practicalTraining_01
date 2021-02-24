'use strict';
// Вирішила оформити завдання :)
const STYLE = {
    color1: `color: #a90b33;`,
    color2: `color: #810ba9;`,
    color3: `color: #0ba932;`,
    center: `<style> body{text-align: center;} </style>`,
    bold: `font-weight: bold;`,
    verticalSpace: '</br>',
    verticalSpaceAmount : 3
}

document.write(`${STYLE.center}`);

//вибач за функцію, вона зовсім простенька)))
function space (){
    for (let i = 0; i <= STYLE.verticalSpaceAmount; i++){
        document.write(`${STYLE.verticalSpace}`);
    }
}
space()
// 1. Write a JavaScript program which compute, the average marks of the following students.
// Then, this average is used to determine the corresponding grade.

const STUDENTS = [
    {
        name: 'John',
        grade: 80
    },

    {
        name: 'Bill',
        grade: 77
    },

    {
        name: 'David',
        grade: 68
    },

    {
        name: 'Ryan',
        grade: 88
    },

    {
        name: 'Nick',
        grade: 95
    },

]

const MESSAGE = `The GPA (Grade Point Average) of students: `

let allStudentsGPASum = 0;
for (let i = 0; i < STUDENTS.length; i++) {
    allStudentsGPASum += STUDENTS[i].grade;
}

const allStudentsGPA = allStudentsGPASum / STUDENTS.length;

const ECTS = {
    A: {grade: 'A', condition: allStudentsGPA < 100 && allStudentsGPA >= 90},
    B: {grade: 'B', condition: allStudentsGPA < 90 && allStudentsGPA >= 80},
    C: {grade: 'C', condition: allStudentsGPA < 80 && allStudentsGPA >= 70},
    D: {grade: 'D', condition: allStudentsGPA < 70 && allStudentsGPA >= 60},
    F: {grade: 'F', condition: allStudentsGPA < 60},
}


switch (true) {
    case ECTS.A.condition :
        document.write(`${MESSAGE} <b style='${STYLE.color1}'> ${allStudentsGPA} ${ECTS.A.grade}</b>`);
        break;
    case ECTS.B.condition :
        document.write(`${MESSAGE} <b style='${STYLE.color1}'> ${allStudentsGPA} ${ECTS.B.grade}</b>`);
        break;
    case ECTS.C.condition :
        document.write(`${MESSAGE} <b style='${STYLE.color1}'> ${allStudentsGPA} ${ECTS.C.grade}</b>`);
        break;
    case ECTS.D.condition:
        document.write(`${MESSAGE} <b style='${STYLE.color1}'> ${allStudentsGPA} ${ECTS.D.grade}</b>`);
        break;
    case ECTS.F.condition :
        document.write(`${MESSAGE} <b style='${STYLE.color1}'> ${allStudentsGPA} ${ECTS.F.grade}</b>`);
        break;
    default:
        console.log('You\'ve broken the calculator :)');
}

space()
// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.

const MAX = 1000;
const NUM1 = 3;
const NUM2 = 5;

let sum = 0;

for (let i = 1; i < MAX; i++) {
    if (i % NUM1 === 0 || i % NUM2 === 0) {
        sum += i
    }
}

document.write(`The sum of the multiples of 3 or 5 that are under 1000: <b style='${STYLE.color2}'>${sum}</b>`);

space()
//  3. Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
//
// * *
//
// * * *
//
// * * * *
//
// * * * * *

const PATTERN = {
    sign : '*',
    rowsAmount : 5,
    horizontalSpace: ' ',
    verticalSpace: '</br>',
    verticalSpaceAmount: 1,
}

let row = '';

for (let i = 0; i < PATTERN.rowsAmount; i++) {
row += PATTERN.sign+PATTERN.horizontalSpace;
    document.write(`<span style='${STYLE.color3}'>${row}</span>`);

    for (let j = 0; j <= PATTERN.verticalSpaceAmount; j++) {
        document.write(`${PATTERN.verticalSpace}`);
    }

}

