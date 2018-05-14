import React from 'react';
import './App.css';
import TaskView from "./TaskView";
import CounterView from "./CounterView";
import {BrowserRouter, Route, Link} from 'react-router-dom'


class App extends React.Component {




  render() {
    return (
     <BrowserRouter>
      <div>
          <h1> Hello everyone!</h1>

          <nav>
              <p><Link to ="/">Home</Link></p>
              <p><Link to ="/counters">Counters</Link></p>
              <p><Link to ="/about">About</Link></p>
              <p><Link to ="/tasks">Tasks</Link></p>
          </nav>




          <Route path="/counters" component={CounterView}/>
          <Route path="/about" render={() => <p>Foo</p>}/>
          <Route path="/tasks" component={TaskView}/>

      </div>
     </BrowserRouter>
    );
  }
}

export default App;
