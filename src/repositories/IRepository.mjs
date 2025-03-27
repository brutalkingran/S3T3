// capa de persistencia
// interfaz crud
// implementacion crud de superheroe
// Permite reutilizar código de acceso a datos y facilita la migración de bases de datos.
// "Declaramos" nuestros métodos
// 3)

class IRepository {
    obtenerPorId(id) {
        throw new Error("Método 'obtenerPorId()' no implementado");
    }

    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");
    }

    buscarPorAtributo(atributo, valor) {
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }

    obtenerMayoresDe30() {
        throw new Error("Método 'obtenerMayoresDe30()' no implementado");
    }

    crearHeroe() {
        throw new Error("Método 'crearHeroe()' no implementado")
    }
}

export default IRepository;