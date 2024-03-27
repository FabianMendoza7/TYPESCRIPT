(() => {
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    };

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123
    }

    const {poder, vision} = avengers;
    console.log(poder.toFixed(2));

    // const printAvenger = (avengers: Avengers) => {
        const printAvenger = ({ironman, ...resto}: Avengers) => {
            console.log(ironman, resto);
    }

    //printAvenger(avengers);

    // desestructuración de arreglos
    const avengersArr: string[] = ['Cap. América', 'Ironman', 'Hulk'];
    const [,ironman,] = avengersArr; // Solo necesito Ironman.


})();