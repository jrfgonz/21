import {AccionesEntusiasmo } from '../acciones';
import {StoreState} from '../types';

import {BAJAR_ENTUSIASMO, SUBIR_ENTUSIASMO, CHANGE_ENTUSIASMO} from '../const';

export function entusiasmo (state: StoreState, action:AccionesEntusiasmo):StoreState{
    switch (action.type){
        case SUBIR_ENTUSIASMO: {
            return {...state,nivelEntusiasmo:state.nivelEntusiasmo+1}
        }
        case BAJAR_ENTUSIASMO :{
            return {...state,nivelEntusiasmo:state.nivelEntusiasmo-1} 
        }
       case CHANGE_ENTUSIASMO :{
           return { ...state ,nivelEntusiasmo:action.nivelEntusiasmo  }
       } 
    }
    return state
}