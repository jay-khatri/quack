import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: 'not loaded',
    };
  }

  componentDidMount() {
    console.log('hello chicken nugget')
    fetch('https://quack.tamuhack.org/test')
      .then(response => response.json())
      .then(this.setState({ response: 'I received a message' }))
      .catch(err => console.log(err));
  }

  // callApi() {
  //   fetch("api/hello
  // }
  // callApi = async () => {
  //   const response = await fetch("/api/hello");
  //   const body = await response.json();
  //
  //   if (response.status !== 200) throw Error(body.message);
  //
  //   return body;
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;