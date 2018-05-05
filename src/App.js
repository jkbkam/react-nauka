import React from 'react';
import AppIntro from './AppIntro';
import './App.css';
import Counter from "./Counter";




class App extends React.Component {
  render() {

    return (
      <div>
         Hello everyone!
          <AppIntro/>
          <Counter initialValue={3}/>
          <Counter initialValue={5}/>
          <Counter initialValue={1}/>
          <Counter
              initialValue={4}
          max={10}
              min={0}
              step={2}
          />
      </div>

    );
  }
}

export default App;
