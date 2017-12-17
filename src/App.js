import React, { Component } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css'
import Editor from './Editor/index'
import EndUser from './EndUser/index'
import * as actions from './actions/index'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  render() {
    console.log('app data ', this.props)
    return (
        <MuiThemeProvider>
          <Router>
            <div className="App">
              <header className="App-header">
                <Link to={'/'}>
                  <span className="App-title">
                    Moderator
                  </span>
                </Link>
                {' '} === {' '}
                <Link to={'/end_user'}>
                  <span className="App-title">
                    End User
                  </span>
                </Link>
              </header>
              <div className="App-intro">
                <Route exact path="/" render={ () =>  <Editor {...this.props}/> } />
                <Route path="/end_user" render={ () =>  <EndUser {...this.props}/> } />
              </div>
            </div>
          </Router>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    fields_data: state.fields_data,
    editor_user_mode: state.editor_user_mode,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...actions }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
