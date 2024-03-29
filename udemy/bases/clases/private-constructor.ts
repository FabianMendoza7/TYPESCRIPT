(() => {

    //Constructores privados:
    //usados para controlar la manera en la cual las instancias son ejecutadas.
    //Ejemplo: singleton.
    /*
    class Apocalipsis {
        constructor(name: string){

        }
    }

    //Lo siguiente no usa el patrón singleton (multiples instancias)
    const apocalipsis1 = new Apocalipsis('Soy apocalipsis1... el único?');
    const apocalipsis2 = new Apocalipsis('Soy apocalipsis2... el único?');
    const apocalipsis3 = new Apocalipsis('Soy apocalipsis3... el único?');

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
    */

    class Apocalipsis {
        static instance: Apocalipsis;
        
        private constructor(public name: string){

        }

        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis el único");
            }

            return Apocalipsis.instance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');
    
    // Va a mostrar el mensaje de la misma instancia, la cual se crea una sola vez (singleton)
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})();