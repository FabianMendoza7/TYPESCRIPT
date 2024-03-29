(()=>{

    interface Auto {
        encender: boolean;
        velocidanMaxima: number;
        acelerar(): void;
    }

    const conducirBatimovil = (auto): void => {
        auto.encender = true;
        auto.velocidanMaxima = 100;
        auto.acelerar();
    }

    const batimovil: Auto = {
        encender: false,
        velocidanMaxima: 0,
        acelerar(){
            console.log("... gogogo!!!");
        }
    }

    interface Guason {
        reir?: boolean;
        comer?: boolean;
        llorar?: boolean;
    }

    const guason: Guason = {
        reir: true,
        comer: true,
        llorar: false
    }

    const reir = (guason): void => {
        if(guason.reir){
            console.log("JAJAJAJA");
        }
    }

    // Interfaz para una función.
    interface CiudadGotica {
        (ciudadanos: string[]): number;
    }

    const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
        return ciudadanos.length;
    }

    interface PersonaInterface{
        edad: number;
        estadoCivil: string;
        nombre: string;
        sexo: string;
        imprimirBio(): void;
    }

    class Persona implements PersonaInterface {
        public edad: number;
        public estadoCivil: string;
        public nombre: string;
        public sexo: string;

        imprimirBio(): void {
            
        }
    }

})()