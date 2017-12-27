import React from 'react'
import SearchResult from './SearchResult'
import Subject from 'material-ui/svg-icons/action/subject'

export default (store) => {
  const Component = (props) => (<SearchResult {...store} {...props} />)

  return {
    Component,
    IconComponent: <Subject />,
    name: 'moderator/content/search-result-field',
    version: '0.0.1',
    text: 'Search Result Field',
  }
}
