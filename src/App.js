import React from 'react';
import './App.css';
import TaskView from "./TaskView";
import Counter from "./Counter";



class App extends React.Component {
  render() {
    return (
      <div>
         Hello everyone!

            <TaskView/>

          <Counter/>

      </div>

    );
  }
}

export default App;
