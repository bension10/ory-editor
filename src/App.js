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

  handleClick = (event) => {
    const user_mode = event.target.getAttribute('data-mode')
    this.props.setEditorUserMode(user_mode)
  }

  render() {
    return (
        <MuiThemeProvider>
          <Router>
            <div className="App">
              <header className="App-header">
                <Link to={'/'}>
                  <span className="App-title" data-mode="moderator" onClick={this.handleClick} >
                    Moderator
                  </span>
                </Link>
                {' '} === {' '}
                <Link to={'/end_user'}>
                  <span className="App-title" data-mode="end_user" onClick={this.handleClick}>
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
    editor_data: state.editor_data,
    fields_data: state.fields_data,
    editor_user_mode: state.editor_user_mode,
    search_results: state.search_results,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...actions }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
