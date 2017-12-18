import React, { Component } from 'react'
import Editor, { Editable, createEmptyState } from 'ory-editor-core'

import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-plugins-slate/lib/index.css'
import 'ory-editor-plugins-parallax-background/lib/index.css'
import 'ory-editor-core/lib/index.css'
import 'ory-editor-ui/lib/index.css'

import Search from './Plugins/Content/Search'
import SearchResult from './Plugins/Content/SearchResult'
import TextLayout from './Plugins/Layout/TextLayout'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class EditorContainer extends Component {

  constructor(props) {
    super(props)
    const { fields_data, editor_user_mode, getSearchResult, search_results } =  this.props
    const plugins = {
      content: [ Search({editor_user_mode, getSearchResult}), SearchResult({fields_data, editor_user_mode, search_results}) ],
      layout: [ TextLayout({editor_user_mode, getSearchResult, search_results}) ],
    }
    this.content = createEmptyState()
    this.editor = new Editor({
      plugins,
      editables: [this.content],
      defaultPlugin: Search({editor_user_mode, getSearchResult})
    })
  }

  componentDidMount () {
    // this.props.setEditorUserMode("moderator")
  }

  handleEditorChange = (editorState) => {
    this.props.initializeData(editorState)
  }

  render() {
    return (
        <div>
          <Editable editor={this.editor} id={this.content.id} onChange={this.handleEditorChange} />
          <Trash editor={this.editor}/>
          <DisplayModeToggle editor={this.editor}/>
          <Toolbar editor={this.editor}/>
        </div>
    )
  }
}

export default EditorContainer