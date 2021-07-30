import React from 'react';
import employees from './data';
import './App.css';
import EmployeesList from './Components/EmployeesList';

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          buscar: '',
          remover: '',
      }
      this.handle = this.handle.bind(this);
  }

  handle() {
      this.setState ({
          buscar: document.getElementById('buscar-input').value,
      })
  }
  
  render() {
      return(
          <EmployeesList employees={employees} handle={this.handle} estadoPai={this.state}/>
      )
  }
}

export default App;
