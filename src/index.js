import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
console.log(React);
//React.createClass is deprecated since React 15.5.0, use the npm module create-react-class instead  react/no-deprecated
//console.log(React.createClass)
//console.log(App)
//console.log(ReactDOM)
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( 
  //<BrowserRouter>  
    <App />
  //</BrowserRouter> 
, document.getElementById('root'));
registerServiceWorker();
