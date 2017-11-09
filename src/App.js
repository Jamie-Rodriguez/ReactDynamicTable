import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoTable from './ToDoTable.js'

let header = [
  {
    label: "ID",
    propName: "id"
  },
  {
    label: "Task",
    propName: "task"
  },
  {
    label: "Status",
    propName: "status"
  }
]

let data = [
  {
    id: "1",
    task: "Breakfast",
    status: "Done"
  },
  {
    id: "2",
    task: "Coffee",
    status: "Done"
  },
  {
    id: "3",
    task: "Code",
    status: "Not done"
  },
  {
    id: "4",
    task: "Sleep",
    status: "Done"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jamie&#8217;s site of goodness</h1>
        </header>
        <p className="App-intro">
          Test table:
        </p>
        <ToDoTable header={header} data={data}/>
      </div>
    );
  }
}

export default App;
