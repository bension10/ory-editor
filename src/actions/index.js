import * as types from '../constants/'

export const initializeData = (data) => {
  return {
    type: types.INITIALIZE_DATA,
    payload: data
  }
}

export const setEditorUserMode = (user_mode) => {
  return {
    type: types.SET_EDITOR_USER_MODE,
    user_mode
  }
}

export const getSearchResult = (search_key) => {
  console.log('search key ', search_key)
  return {
    type: types.GET_SEARCH_RESULTS,
    search_key
  }
}