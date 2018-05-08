import React from 'react';

import './App.css';

import TaskView from "./TaskView";




class App extends React.Component {
  render() {

    return (
      <div>
         Hello everyone!

            <TaskView/>
      </div>

    );
  }
}

export default App;
