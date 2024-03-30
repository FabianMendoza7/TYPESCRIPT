//Los decoradores se ejecutan en tiempo de transpilación.

//1.Decorador de CLASE como una función tradicional.
//En las clases recibimos el constructor.
function printToConsole(constructor: Function){
    console.log(constructor);
}

//2.Decorador de Fábrica (factory decorator).
//Puede ser usado como decorador de clase o de método.
//Un factory constructor debe retornar una función, por lo que se debe incovar con paréntesis.
const printToConsoleConditional = (print: boolean = false): Function => {
    if(print){
        return printToConsole;
    } else {
        return () => {}
    }
}

//3. Ejemplo: bloqueo de prototipo.
const bloquearPrototipo = function(constructor: Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

//4. Decorador de Método.
//Implementado como un factory decorator.
//Este caso usado para los métodos.
function CheckValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        //console.log({target, propertyKey, descriptor});
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if(id < 1 || id > 800) {
                return console.error("El id del pokemon debe estar entre 1 y 800");
            } else {
                return originalMethod(id);
            }
        }
    }
}

//5. Decorador de propiedades.
//Para las propiedades no se recibe el descriptor, sino que hay que crearlo.
//Es recomendable usar funciones tradicionales porque 'this' apuntaría directamente a la función (lo que se necesita)
//Con un array function 'this' apuntaría hacia afuera según su contexto (ya sea una instancia global o clase, pero no directamente al decorador)
//Este decorador no sería necesario cuando se implementen bien las propiedades privadas en javascript 
//(ya que Typescript solo muestra un warning cuando se intenta establecer un valor a una prop privada).
function readonly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string) {
    //return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
        //En este momento descriptor devolvería 'undefined'.
        //console.log({target, propertyKey, descriptor});

        //Creemos el descriptor.
        const descriptor: PropertyDescriptor = {
            get() {
                console.log("this",this);
                return 'FEMO';
            },
            set(this, val){
               //console.log(this, val);
               Object.defineProperty(this, propertyKey, {
                value: val,
                writable: !isWritable,
                enumerable: false
               })
            }
        }

        return descriptor;
    }
}

//@printToConsole
@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {
    //@readonly(false)
    @readonly()
    public publicApi: string = 'https://pokeapi.co';

    constructor(public name: string) {
    }

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon ${id} guardado en la BD`);
    }
}