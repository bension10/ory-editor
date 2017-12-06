import React, { Component } from 'react'
import TextField from 'material-ui/TextField';

class Search extends Component {

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
          <TextField name="search-key" hind="Search Here..." onChange={this.handleClick} />
        </div>
    )
  }
}
export default Search