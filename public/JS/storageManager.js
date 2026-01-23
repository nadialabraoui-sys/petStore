"use strict"

export class StorageManager {

    static save(clave, elementoNuevo) {
        //añade un nuevo elemento en una clave del local storage, exista o no
        let lista = JSON.parse(localStorage.getItem(clave)) || [];

        lista.push(elementoNuevo);

        localStorage.setItem(clave, JSON.stringify(lista));
    }

    static load(clave){
        //devuelve una clave del local storage
        return JSON.parse(localStorage.getItem(clave)) || false;
    }

    static  deleteAll() {
        //elimina el LS entero
        localStorage.clear();
    }

    static deleteKey(clave){
        //elimina un elemento de LS
        localStorage.removeItem(clave);
    }

    static  deleteElement(clave, identificador)  {
        //dentro de una lista, elimina un elemento concreto
        let lista = JSON.parse(localStorage.getItem(clave)) || [];

        lista = lista.filter(x => x.id !== identificador);

        localStorage.setItem(clave, JSON.stringify(lista));
    }

    static updateElement(clave, identificador, campoAModificar, nuevoValor) {
        //dentro de una lista, actualiza un elemento concreto
        let lista = JSON.parse(localStorage.getItem(clave)) || [];

        lista = lista.map(x => {
            if(x.name === identificador) {
                return { ...x, [campoAModificar]: nuevoValor };
            }
            return x;
        });

        localStorage.setItem(clave, JSON.stringify(lista));

    }


    static updateKey(clave, nuevaLista) {
        //sustituye una clave entera por un nuevo conjunto de elementos

        localStorage.setItem(clave, JSON.stringify(nuevaLista));

    }

    static findElement(claveLS, claveElemento, elemento) {
        let lista = JSON.parse(localStorage.getItem(claveLS)) || [];

        if(lista.find((x) => x[claveElemento] === elemento) !== undefined) {
            return lista.find((x) => x[claveElemento] === elemento);
        } else {
            return false;
        }
    }

}