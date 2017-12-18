import React, { Component } from 'react'
import { HTMLRenderer } from 'ory-editor-renderer'

import Search from '../Editor/Plugins/Content/Search/'
import SearchResult from '../Editor/Plugins/Content/SearchResult/'
import TextLayout from '../Editor/Plugins/Layout/TextLayout/'

class EndUser extends Component {

  constructor(props) {
    super(props)
    const { fields_data, editor_user_mode, getSearchResult, search_results } =  this.props
    this.plugins = {
      content: [ Search({editor_user_mode, getSearchResult}), SearchResult({fields_data, editor_user_mode, search_results}) ],
      layout: [ TextLayout({editor_user_mode, getSearchResult}) ],
    }
  }

  componentDidMount () {
    // this.props.setEditorUserMode("end_user")
  }

  render() {
    const { editor_data } = this.props
    console.log('end user props ', this.props)
    return (
      <div>
        <h1>End User App</h1>
        <HTMLRenderer state={editor_data} plugins={this.plugins} />
      </div>
    )
  }
}

export default EndUser