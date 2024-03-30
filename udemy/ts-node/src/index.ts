//-1
// // import { Hero } from "./classes/Hero";
// // import { powers } from "./data/powers";

// // const ironman: Hero = new Hero('Ironman', 1, 55);

// // console.log(ironman);
// // console.log(powers);


// import { printObject } from "./generics/generics";

//-2-Generics

// import { getPokemon } from './generics/get-pokemon';

// getPokemon(4)
//     .then(pokemon => console.log(pokemon.sprites.front_default))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Fin de get-pokemon"))

//-3-Decorators
import {Pokemon} from "./decorators/Pokemon";

const charmander = new Pokemon("Charmander");

//(Pokemon.prototype as any).customName = 'Pikachu';
console.log(charmander.publicApi);
charmander.publicApi = "https://greencode.deno.dev";
charmander.savePokemonToDB(5);