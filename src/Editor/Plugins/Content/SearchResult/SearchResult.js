import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/svg-icons/action/list'

import isEmpty from 'lodash/isEmpty'

class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show_popover: false,
      anchor_element: '',
      default_value: 'Choose Field'
    }
  }

  handleMenuChange = (event, menuItem) => {
    const { onChange } = this.props
    onChange({
      field: menuItem.props.primaryText
    })
    this.setState({ default_value: menuItem.props.primaryText })
  }

  togglePopover = (event) => {
    this.setState({
      show_popover: !this.state.show_popover,
      anchor_element: event.currentTarget,
    })
  }

  render() {
    const { paper_style, fields_data, isPreviewMode, state, editor_user_mode, search_results } = this.props
    const { show_popover, anchor_element, default_value } = this.state
    console.log('search result props ', search_results)


    if(editor_user_mode === 'end_user') {
      if(isEmpty(search_results)) {
        return (
          <div>
            Search Result Here
          </div>
        )
      }
      else {
        return Object.keys(search_results.data_text).map( (result, key) => {
          return <p key={key}>{result.data_text}</p>
        })
      }

    }

    if(isPreviewMode) {
      return (
        <Paper style={paper_style} zDepth={1} >
          {state.field}
        </Paper>
      )
    }

    return(
        <div>
          <Paper style={paper_style} zDepth={1} >
            {default_value}
            <List style={{ right: 10, position: 'absolute', }} onClick={this.togglePopover} />
          </Paper>
          { show_popover &&
            <Popover
                open={show_popover}
                anchorEl={anchor_element}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.togglePopover}
            >
              <Menu onItemClick={ this.handleMenuChange }>
                {
                  fields_data.map( (field, key) => {
                    return <MenuItem primaryText={field} key={key} />
                  })
                }
              </Menu>
            </Popover>
          }
        </div>
    )
  }
}

SearchResult.defaultProps = {
  paper_style:{
    position: 'relative',
    padding: 10,
    width: 300,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
  }
}

export default SearchResult


