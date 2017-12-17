import React, { Component } from 'react'
import { HTMLRenderer } from 'ory-editor-renderer'

import Search from '../Editor/Plugins/Content/Search/'
import SearchResult from '../Editor/Plugins/Content/SearchResult/'
import TextLayout from '../Editor/Plugins/Layout/TextLayout/'

const props = ['Education']

//TODO move this to constructor, and add the props(fields_data) there instead
const plugins = {
  content: [ Search, SearchResult(props) ],
  layout: [ TextLayout ],
}

class EndUser extends Component {

  componentDidMount () {
    //this.props.setEditorUserMode("end_user")
  }

  render() {
    const { data } = this.props
    console.log('end user data ', data)
    return (
      <div>
        <h1>End User App</h1>
        <HTMLRenderer state={data} plugins={plugins} is_end_user={true} />
      </div>
    )
  }
}

export default EndUser