/**
 * Compara la edad de 2 sujetos y retorna un string con el resultado
 * @param nombre1 nombre del primer sujeto a comparar
 * @param edad1 edad del primer sujeto a comparar
 * @param nombre2 nombre del segundo sujeto a comparar
 * @param edad2 edad del segundo sujeto a comparar
 * @returns {string} resultado de la comparación en una oración
 */

export const quienEsMayor = (nombre1: string, edad1: number, nombre2: string, edad2: number): string => {
    if (edad1 > edad2) {
        return `${nombre1} es mayor que ${nombre2}`;
    }else if(edad1 < edad2){
        return `${nombre1} es menor que ${nombre2}`;
    }else return `${nombre1} y ${nombre2} tienen la misma edad`
}