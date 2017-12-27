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
import store from '../store/'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const my_store = store.getState()

const content = createEmptyState()
const plugins = {
  content: [ Search(my_store), SearchResult(my_store) ],
  layout: [ TextLayout(my_store) ],
}
const editor = new Editor({
  plugins,
  editables: [content],
  defaultPlugin: Search(my_store)
})

class EditorContainer extends Component {

  componentDidMount () {
    // this.props.setEditorUserMode("moderator")
  }

  handleEditorChange = (editorState) => {
    this.props.initializeData(editorState)
  }

  render() {
    return (
        <div>
          <Editable editor={editor} id={content.id} onChange={this.handleEditorChange} />
          <Trash editor={editor}/>
          <DisplayModeToggle editor={editor}/>
          <Toolbar editor={editor}/>
        </div>
    )
  }
}

export default EditorContainer