import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
render(name) {
this.brand=name;
  return (
    <div className="App">
      
      <h1>Hello World</h1>

    </div>
  );
}
} 

//myApp =new App("myApp"); 
//document.write(myApp.brand)
export default App;
