(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad']
    };

    flash: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper velocidad', 'Super fuerza'],
        getName() {
            return this.name;
        }
    };
    
})()