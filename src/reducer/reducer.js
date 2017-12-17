import * as types from '../constants/'

export const data = (state = {}, action = {}) => {
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