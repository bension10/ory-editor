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
const props = ['Education', 'Skills', ]

injectTapEventPlugin()

const plugins = {
  content: [ Search, SearchResult(props) ],
  layout: [ TextLayout ],
}

const content = createEmptyState()

// Instantiate the editor
const editor = new Editor({
  plugins,
  editables: [content],
  defaultPlugin: Search
})


class EditorContainer extends Component {

  componentDidMount () {
    //this.props.setEditorUserMode("moderator")
  }

  handleEditorChange = (editorState) => {
    this.props.initializeData(editorState)
  }

  render() {
    console.log('editor props ', this.props)
    return (
        <div>
          <Editable editor={editor} id={content.id} onChange={this.handleEditorChange} {...this.props} />
          <Trash editor={editor}/>
          <DisplayModeToggle editor={editor}/>
          <Toolbar editor={editor}/>
        </div>
    )
  }
}

export default EditorContainer