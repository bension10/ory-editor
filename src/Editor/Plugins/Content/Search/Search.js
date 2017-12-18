import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search_key: ''
    }
  }


  handleSearchClick = (event) => {
    const { onChange } = this.props
    onChange({
      search_value: event.target.value,
    })
  }

  handleSearch = (event) => {
    console.log('search ', event)
    this.props.getSearchResult()
  }

  render() {
    console.log('props ', this.props)
    const { style, editor_user_mode } = this.props

    return(
        <div>
          <TextField name="search-key" hintText="Search Here..." onChange={this.handleSearchClick} />
          <RaisedButton
            label="Search"
            style={style.button}
            onClick={this.handleSearch}
            disabled={editor_user_mode === "moderator"}
          />
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