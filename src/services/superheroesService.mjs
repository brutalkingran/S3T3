// Lógica de negocio. Llama a los repositorios para obtener datos y aplicar lógica adicional.
// Servicios de Superheroe
// 4)

import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export const obtenerSuperheroePorId = async (id) => {
    return await SuperHeroRepository.obtenerPorId(id);
}

export const obtenerTodosLosSuperheroes = async () => {
    return await SuperHeroRepository.obtenerTodos();
}

export const buscarSuperheroesPorAtributo = async (atributo, valor) => {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export const obtenerSuperheroesMayoresDe30 = async () => {
    return await SuperHeroRepository.obtenerMayoresDe30();
}

export const crearSuperheroe = async ( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador ) => {
    return await SuperHeroRepository.crearHeroe( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador )
}

export const actualizarSuperheroe = async ( nombre, cambio ) => {
    return await SuperHeroRepository.actualizarHeroe( nombre, cambio );
}

export const borrarSuperheroeID = async ( id ) => {
    return await SuperHeroRepository.borrarheroeID( id );
}

export const borrarSuperheroeNombre = async ( nombre ) => {
    return await SuperHeroRepository.borrarheroeNombre( nombre );
}
