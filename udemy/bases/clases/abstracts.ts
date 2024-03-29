(()=>{
    class Mutante{
        constructor(
            public name: string,
            public realName: string
        ){

        }
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo';
        }
    }

    class Villian extends Mutante {
        conquistarMundo(){
            return 'Mundo conuistado';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Pepito');
    
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());

    // otro uso de clases abstractas: pasar instancias de dicha clase como argumentos:
    const printName = (character: Mutante) => {
        console.log(character.realName);
    }

    printName(wolverine);
    printName(magneto);
})()