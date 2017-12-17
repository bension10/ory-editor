import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Search extends Component {

  handleSearchClick = (event) => {
    const { onChange } = this.props
    onChange({
      search_value: event.target.value,
    })
  }

  handleSearch = (event) => {
    console.log('search ', event)
  }

  render() {
    const { style } = this.props
    return(
        <div>
          <TextField name="search-key" hind="Search Here..." onChange={this.handleSearchClick} />
          <RaisedButton label="Search" style={style.button} onClick={this.handleSearch} />
        </div>
    )
  }
}

Search.defaultProps = {
  style: {
    button: {
      margin: 12,
    }
  }
}

export default Search