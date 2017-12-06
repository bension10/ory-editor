import React, { Component } from 'react'
import Editor, { Editable, createEmptyState } from 'ory-editor-core'
import 'ory-editor-core/lib/index.css' //
import 'ory-editor-ui/lib/index.css'


import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'
import 'ory-editor-plugins-slate/lib/index.css'
import 'ory-editor-plugins-parallax-background/lib/index.css'

import Search from './Plugins/Content/Search'
import TextLayout from './Plugins/Layout/TextLayout'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// Define which plugins we want to use. We only have slate and parallax available, so load those.
const plugins = {
  content: [ Search ],
  layout: [ TextLayout ],
}

// Creates an empty editable
const content = createEmptyState()

// Instantiate the editor
const editor = new Editor({
  plugins,
  // pass the content state - you can add multiple editables here
  editables: [content],
  defaultPlugin: Search
})


class EditorContainer extends Component {

  handleEditorChange = (editorState) => {
  }

  render() {
    return (
        <div>
          <Editable editor={editor} id={content.id} onChange={this.handleEditorChange}/>
          <Trash editor={editor}/>
          <DisplayModeToggle editor={editor}/>
          <Toolbar editor={editor}/>
        </div>
    )
  }
}

export default EditorContainer

//TODO setup store, get dummy data, display data on editor