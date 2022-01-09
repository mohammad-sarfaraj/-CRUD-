import React, { Component } from 'react';
import Todo from './Todo'; 
import './App.css';

class App extends Component {
     constructor(props) {
       super(props);
       this.state= {
       show: false
      };
     }

  render() {
    return (
      <div className="App">
       <Todo />
      </div>
    );
  }
}

export default App;
