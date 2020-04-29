import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


//const myfirstElement = <h1>Hello World of React!! </h1>
/*ReactDOM.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>,
  document.getElementById('root')
);*/
//ReactDOM.render(<h1>Hello!!!</h1>,document.getElementById('root'));

/* unction tick(){
const element = (
<div>
<h2>It Is{new Date().toLocaleDateString()}</h2>
</div>
);
ReactDOM.render(element,document.getElementById('root'));
}

setInterval(tick,1000); */

//const myelement = React.appendChild('h1',{},'I Without JSX');
/*const myelement = (<div>
<h1>React is {5+5} better than JSX!!!!</h1>
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
  </div>
  );*/

function formateName(user){
  return user.firstName + ' ' + user.lastName;
}
const user={
  firstName:'Akshay',
  lastName:'Donode'
};

const myelement= (
  <h1>Hello, {formateName(user)}   </h1>
);

ReactDOM.render(myelement, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
