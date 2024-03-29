(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ){
            console.log("Constructor de Avenger llamado");
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
            console.log('Constructor Xmen llamado');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string) {
            this.name = name;
        }

        getFullnameDesdeXmen() {
            console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    //console.log(wolverine);

    // getFullName no es reconocido aquí (s protected: sólo dentro de la clase Avenger o clases que se deriven de ella).
    //wolverine.getFullName();

    wolverine.getFullnameDesdeXmen();

    wolverine.fullName = 'Femo';

    // console.log(wolverine.fullName);

})();