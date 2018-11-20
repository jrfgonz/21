import {createStore, Action} from 'redux';
import {entusiasmo} from './reducers';
import {StoreState} from './types';
import {Provider} from 'react-redux';


import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hola from './containers/Hola';

const store =createStore <StoreState,Action,{},{}>(entusiasmo,{
  nombre:'',
  nivelEntusiasmo:1
})

ReactDOM.render(
 <Provider store={store}><Hola  /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
