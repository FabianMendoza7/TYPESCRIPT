"use strict";
(() => {
    // const addNumber = (a: number, b: number) => {
    //     return a+ b;
    // }
    // o lo que es lo mismo:
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `El mundo se salvó`;
    let myFunction;
    myFunction = 10;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Femo'));
    // Declarar función con tipos
    let myFunction2;
    myFunction2('abc');
})();
