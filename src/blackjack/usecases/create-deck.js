import _ from 'underscore';


/**
 * Esta funcion crea un nuevo deck
 * @param { array } tiposEspeciales 
 * @param { array } tiposCarta 
 * @returns { array } retorna un nuevo deck
 */


export const crearDeck = ( tiposCarta, tiposEspeciales ) => {

    if( !tiposCarta || tiposCarta.length === 0 ) throw new Error('TiposCarta es obligatorio como un arreglo de string');
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}
