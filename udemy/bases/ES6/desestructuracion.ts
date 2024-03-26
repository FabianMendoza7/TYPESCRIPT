(() => {
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: string;
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

    printAvenger(avengers);
})();