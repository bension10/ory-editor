import React from 'react'
import Search from './Search'
import Input from 'material-ui/svg-icons/action/input'

export default (store) => {
  const Component = (props) => (<Search {...store} {...props} />)

  return {
    Component,
    IconComponent: <Input />,
    name: 'moderator/content/input-text-field',
    version: '0.0.1',
    text: 'Search Input',
  }

}