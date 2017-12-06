import React, { Component } from 'react'
import SearchResultsList from './SearchResultsList'
import Editor, { Editable, createEmptyState } from 'ory-editor-core'

const plugins = {
  content: [ SearchResultsList ],
}

const content = createEmptyState()
const editor = new Editor({
  plugins,
  // pass the content state - you can add multiple editables here
  editables: [content],
  defaultPlugin: SearchResultsList
})

class SearchResult extends Component {

  handleClick = (event) => {
    const { onChange } = this.props
    onChange({
      value: event.target.value
    })
  }

  render() {
    console.log('props ', this.props)
    return(
        <div>
          <Editable editor={editor} id={234234} content={content.id}/>
        </div>
    )
  }
}
export default SearchResult