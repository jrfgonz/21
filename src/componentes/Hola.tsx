import *  as React from 'react';
import './hola.css';


export interface Propiedades {
    nombre: string;
    nivelEntusiasmo: number;
    onsubirEntusiamo?: () => void;
    onBajarEntusiamo?: () => void;
    onChangeThis?: (nivelEntusiamo: number) => void;
}
function Hola({ nombre, nivelEntusiasmo, onsubirEntusiamo, onBajarEntusiamo, onChangeThis }: Propiedades) {
    const change = function getChange(e: any) {
        if (onChangeThis) {
         let   varEntusiasmo =e.target.value
            if  (varEntusiasmo=='' ) varEntusiasmo=0
             
                return onChangeThis(parseInt(varEntusiasmo))
             
        }
    }
    return (
        <div className="hola">
            <div>hola{nombre + GetnivelEntusiasmo(nivelEntusiasmo)}</div>
            <button className='hola' onClick={onsubirEntusiamo}>+</button>
            <button className='hola' onClick={onBajarEntusiamo}>-</button>
            <input type="text" className="inputText" onChange={change} value={nivelEntusiasmo} />
        </div>
    )
}

// interface estado {

//     estadoActual: number;
// }

// function Hola ({nombre='jaime', entusiamo= 0} :Props) {
// return (
//     <div>hola {nombre+ nivelEntusiasmo(entusiamo)}</div>
//     )
// }
// class Hola extends React.Component<Propiedades, estado>{
//     constructor(p: Propiedades) {
//         super(p);
//         this.state = { estadoActual: p.nivelEntusiasmo || 1 }
//     }
//     // onsubirEntusiamo = () => {
//     //     return this.actualizarEntusiasmo(this.state.estadoActual + 1)
//     // }
//     // onBajarEntusiamo = () => {
//     //     if (this.state.estadoActual > 1) {
//     //         return this.actualizarEntusiasmo(this.state.estadoActual - 1)
//     //     }
//     // }
//     actualizarEntusiasmo(entusiasmoActual: number) {
//         this.setState({ estadoActual: entusiasmoActual })
//     }
//     render() {
//         const { nombre } = this.props;
//         if (this.state.estadoActual <= 0) {
//             throw new Error("no puede ser menor que cero ");
//         }
//         return (
//             <div className='hola'> 
//                 <div>
//                     hola{nombre + nivelEntusiasmo(this.state.estadoActual)}
//                 </div >
//                 <button className='hola' onClick={this.props.onsubirEntusiamo}>+</button>
//                 <button className='hola' onClick={this.props.onBajarEntusiamo}>-</button>
//                 <label>{this.state.estadoActual}</label>
//             </div>
//         )
//     }
// }
export default Hola;
function GetnivelEntusiasmo(e: number) {
    return Array(e + 1).join("!");
}
