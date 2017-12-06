import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';
import Editor from "./Editor/index";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Ory Editor</h1>
            </header>
            <div className="App-intro">
              <Editor/>
            </div>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
