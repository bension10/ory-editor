import React from 'react'
import { ContentPlugin } from 'ory-editor-core/lib/service/plugin/classes'

import Search from '../../Content/Search'
import SearchResult from '../../Content/SearchResult'
import CropSquare from 'material-ui/svg-icons/image/crop-square'

const BlackBorderPlugin = ({ children }) => (
    <div id="black-border" style={{ border: '1px solid black', padding: '16px' }}>
      <p>Test Layout Plugin</p>
      {children}
    </div>
)

export default {
  Component: BlackBorderPlugin,
  IconComponent: <CropSquare />,
  name: 'example/layout/black-border',
  version: '0.0.1',
  text: 'Black Border',

  createInitialChildren: () => ({
    id: 1,
    rows: [
      {
        id: 2,
        cells: [
          {
            content: {
              plugin: new ContentPlugin(Search),
              state: {
                searchResultsName: 'Sample Text'
              }
            },
            id: 3
          }
        ]
      },
      {
        id: 4,
        cells: [
          {
            content: {
              plugin: new ContentPlugin(SearchResult),
              state: {
                searchResultsName: 'Sample Text'
              }
            },
            id: 5
          }
        ]
      }
    ],
  }),
}