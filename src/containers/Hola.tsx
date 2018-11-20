import Hola from '../componentes/Hola';
import * as acciones from '../acciones/';
import { connect} from 'react-redux';
import {Dispatch} from 'redux';

export function mapStateToProps ({nombre, nivelEntusiasmo}:Storage){
    return{
        nombre,
        nivelEntusiasmo
    }
}

export function mapDispatchtoProps (dispatch:Dispatch<acciones.AccionesEntusiasmo>){
    return{
        onsubirEntusiamo: ()=> dispatch(acciones.subirEntusiasmo()),
        onBajarEntusiamo: ()=> dispatch (acciones.bajarEntusiamo()),
        onChangeThis:(nivelentusiasmo:number)=> dispatch(acciones.changeEntusiasmo(nivelentusiasmo))
    }
}
export default connect (mapStateToProps,  mapDispatchtoProps)(Hola);