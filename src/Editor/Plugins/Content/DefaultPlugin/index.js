import React from 'react'
import DefaultPlugin from './DefaultPlugin'
import Subject from 'material-ui/svg-icons/action/subject'

export default {
  Component: DefaultPlugin,
  IconComponent: <Subject />,
  name: 'moderator/content/default-plugin',
  version: '0.0.1',
  text: 'Default Plugin',
}
