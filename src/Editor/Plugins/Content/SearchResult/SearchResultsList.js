import React, { Component } from 'react'
import Editor, { Editable, createEmptyState } from 'ory-editor-core'
import SearchIcon from 'material-ui/svg-icons/action/search'

const SearchResultList = () =>{

  // const handleClick = (event) => {
  //   const { onChange } = this.props
  //   onChange({
  //     value: event.target.value
  //   })
  // }

  // render() {
    // console.log('props ', this.props)
    return(
        <div>
          <p>
           test
          </p>
        </div>
    )
  // }
}

export default {
  Component: SearchResultList,
  IconComponent: <SearchIcon />,
  name: 'example/content/input-text-field',
  version: '0.0.1',
  text: 'Input Text Field',
}