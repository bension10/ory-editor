import React, { Component } from 'react'
import { HTMLRenderer } from 'ory-editor-renderer'

import Search from '../Editor/Plugins/Content/Search/'
import SearchResult from '../Editor/Plugins/Content/SearchResult/'
import TextLayout from '../Editor/Plugins/Layout/TextLayout/'

class EndUser extends Component {

  constructor(props) {
    super(props)
    const { fields_data, editor_user_mode } =  this.props
    this.plugins = {
      content: [ Search, SearchResult({fields_data, editor_user_mode}) ],
      layout: [ TextLayout ],
    }
  }

  componentDidMount () {
    this.props.setEditorUserMode("end_user")
  }

  render() {
    const { data } = this.props
    console.log('end user data ', data)
    return (
      <div>
        <h1>End User App</h1>
        <HTMLRenderer state={data} plugins={this.plugins} />
      </div>
    )
  }
}

export default EndUser