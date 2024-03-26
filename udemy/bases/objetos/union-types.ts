(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    // soporta multiples tipos y un valor por defecto
    let myCustomVariable: (string | number | Hero) = "Fernando";

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    
    console.log(typeof myCustomVariable);


})()
