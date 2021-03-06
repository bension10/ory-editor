import * as types from '../constants/index'

export const editor_data = (state = {}, action = {}) => {
  switch(action.type) {
    case types.SET_DATA:
      return action.payload
    default:
      return state
  }
}

export const fields_data = (state = ['Education', 'Skills', 'Years Of Experience', 'Past Jobs', 'Others'], action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

export const editor_user_mode = ( state = "moderator", action = {} ) => {
  switch (action.type) {
    case types.GET_EDITOR_USER_MODE:
      return action.user_mode

    default:
      return state
  }
}

export const search_results = ( state = {}, action = {} ) => {
  console.log('search results reducer ', action.payload)
  switch (action.type) {
    case types.SET_SEARCH_RESULTS:
      return action.payload

    default:
      return state
  }
}