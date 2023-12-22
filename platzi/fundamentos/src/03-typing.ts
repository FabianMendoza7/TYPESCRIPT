let myProductName = 'Producto 1';
let myProductPrice = 123;
let mixed: number | boolean = true
let abc: any
abc = "HOLA"

//casteo 1
const rta = (abc as string).toLowerCase();
console.log(rta)

//casteo 2
const rta2 = (<number>abc).toFixed();
console.log(rta2)

//alias types
type UserID = string | number | boolean

function greeting(userId: UserID){

}

//literal types:
let shirtSize: 'S' | 'M' | 'L' | 'XL' // Prototype: shirtSize
shirtSize = 'M'

//permitir nulos en variables tipadas:
let myNumber: number | null = null;

//? operator
let yourName: string | null = 'pepe'
let hello = yourName?.toLowerCase() || 'noBody';

//parámetros opcionales (? operator lo coloca como indefinido):
const func = (param1: string, param2?: number) => {
}

//retorno de funciones
const func2 = (param1: string): number => {
  return 0
}

//objects as params:
const funct = (data: {email: string, stock: number}) => {
}

// Tipado
type Product = {
  email: string,
  stock: number
}

const funct2 = (data: Product) => {
}
