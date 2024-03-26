(() => {

    let flash: {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string | undefined
    }

    flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getName(){
            return this.name;
        }
    }

    //Tenemos un problema, por resolver en type.ts.
    console.log(">>", flash.getName());
})()
