import React, { Component } from 'react'
import { HTMLRenderer } from 'ory-editor-renderer'

import Search from '../Editor/Plugins/Content/Search/'
import SearchResult from '../Editor/Plugins/Content/SearchResult/'
import TextLayout from '../Editor/Plugins/Layout/TextLayout/'

import store from '../store/'

const my_store = store.getState()
const dispatch = store.dispatch

const plugins = {
  content: [ Search({...my_store, dispatch}), SearchResult({...my_store, dispatch}) ],
  layout: [ TextLayout({...my_store, dispatch}) ],
}

class EndUser extends Component {
  componentDidMount () {
    // this.props.setEditorUserMode("end_user")
  }

  render() {
    const { editor_data } = this.props
    //console.log('end user props ', this.props)
    //console.log('end user my_store ', my_store)
    return (
      <div>
        <h1>End User App</h1>
        <HTMLRenderer state={editor_data} plugins={plugins} />
      </div>
    )
  }
}

export default EndUser