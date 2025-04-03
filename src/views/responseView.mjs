// capa de presentación
// funciones para mostrar datos de superhéroes
// 6)

export const renderizarSuperheroe = ( superheroe ) => {
    return {
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.aliados,
        Enemigos: superheroe.enemigos
    }
}

export const renderizarListaSuperheroes = (superheroes) => {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}

export const formatearArray = ( textoArray = '' ) => {
    return textoArray
        .split(",")
        .map(( elemento ) => {
            return elemento.trim();
        })
        .filter( elemento => {
            return elemento !== ""
        } );
}