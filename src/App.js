import React from 'react';
import './App.css';
import TasksView from "./TasksView";
import CounterView from "./CounterView";
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from "./NavBar";
import MagicNumber from "./MagicNumber";


class App extends React.Component {




  render() {
    return (
     <BrowserRouter>
      <div>
          <h1> Hello everyone!</h1>


<NavBar/>



          <Route path="/counters" component={CounterView}/>
          <Route path="/about" render={() => <p>Foo</p>}/>
          <Route path="/tasks" component={TasksView}/>
          <Route path="/magicnumbers" component={MagicNumber}/>

      </div>
     </BrowserRouter>
    );
  }
}

export default App;
