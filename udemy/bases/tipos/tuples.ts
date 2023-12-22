(()=>{
    // Esto es un arreglo de diferentes tipos:
    const heros: (string | number)[] = ['Dr Strange', 100]; // las tuplas pueden contener mas de dos elementos.

    // Esto es una TUPLA:
    const heros2: [string, number] = ['Dr Strange', 100];

    // heros2[0] = 30 --> Error, espera string.

    heros2[0] = 'Ironman';
    heros2[1] = 30;
})()