import React, { Component } from 'react';
import Header from './component/Header';
import Center from './component/Center';
import Footer from './component/Footer';
import './index.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Center />
        <Footer />
      </div>
    );
  }
}

export default App;
