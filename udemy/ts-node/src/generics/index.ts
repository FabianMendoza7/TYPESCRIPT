// import { genericFunctionArray } from "./generics";

import { Hero } from "../interfaces/Hero";
import { Villian } from "../interfaces/Villian";
import { genericFunctionArray } from "./generics";

// console.log(genericFunctionArray(3.141618).toFixed(2));
// console.log(genericFunctionArray('Hola Mundo').toLocaleUpperCase());
// console.log(genericFunctionArray(new Date()).getDate());


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
};

console.log(genericFunctionArray<Villian>(deadpool).dengerLevel);