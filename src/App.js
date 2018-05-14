import React from 'react';
import './App.css';
import TaskView from "./TaskView";
import Counter from "./Counter";



class App extends React.Component {

    state = {
        initialValue: 2
    }


  render() {
    return (
      <div>
         Hello everyone!

            <TaskView/>

          <Counter initialValue={this.state.initialValue}/>


      </div>

    );
  }
}

export default App;
