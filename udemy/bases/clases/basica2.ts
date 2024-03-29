(() => {
    class Avenger {
        static avgAge: number = 35;
        static getAvgAge() {
            // En este caso por ser stati c, no devuelve la propiedad 'name' sino el nombre de la clase 'Avenger'.
            return this.name;
        };

        constructor(
            private name: string,
            private team: string,
            public realName?: string
        ){

        }

        bio(){
            return `${this.name} (${this.team})`;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitán', 'Scott Lang');
    //console.log(antman.bio());
})()