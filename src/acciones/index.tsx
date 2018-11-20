import * as constantes from '../const';
export interface ISubirEntusiasmo{
    type: constantes.SUBIR_ENTUSIASMO
}
export interface IBajarEntusiasmo{
    type: constantes.BAJAR_ENTUSIASMO
}
export interface  IonChange {
    type: constantes.CHANGE_ENTUSIASMO, nivelEntusiasmo:number
}

export type AccionesEntusiasmo = ISubirEntusiasmo | IBajarEntusiasmo | IonChange ; 

export function 
subirEntusiasmo() :ISubirEntusiasmo{
    return{ 
        type: constantes.SUBIR_ENTUSIASMO
    }
}
export function bajarEntusiamo() :IBajarEntusiasmo{
    return{ 
        type: constantes.BAJAR_ENTUSIASMO
    }
}
export function changeEntusiasmo(nivelEntusiasmo:number):IonChange {
    return {
        type: constantes.CHANGE_ENTUSIASMO, nivelEntusiasmo
    }

} 
