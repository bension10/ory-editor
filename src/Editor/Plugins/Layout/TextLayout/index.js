import React from 'react'
import { ContentPlugin } from 'ory-editor-core/lib/service/plugin/classes'

import Search from '../../Content/Search'
import CropSquare from 'material-ui/svg-icons/image/crop-square'

const BlackBorderPlugin = ({ children }) => (
    <div id="black-border" style={{ border: '1px solid black', padding: '16px' }}>
      <p>Search Here</p>
      {children}
    </div>
)

export default (store) => {
  const Component = (props) => (<BlackBorderPlugin {...props} />)
  return {
    Component,
    IconComponent: <CropSquare />,
    name: 'example/layout/black-border',
    version: '0.0.1',
    text: 'Search Container',

    createInitialChildren: () => ({
      id: 1,
      rows: [
        {
          id: 2,
          cells: [
            {
              content: {
                plugin: new ContentPlugin(Search({...store})),
                state: {
                  searchResultsName: 'Search'
                }
              },
              id: 3
            }
          ]
        }
      ],
    })
  }
}