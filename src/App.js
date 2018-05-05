import React from 'react';
import AppIntro from './AppIntro';
import './App.css';
import Counter from "./Counter";




class App extends React.Component {
  render() {
      console.log('malujemy App')
    return (
      <div>
         Hello everyone!
          <AppIntro/>
          <Counter/>
      </div>

    );
  }
}

export default App;
