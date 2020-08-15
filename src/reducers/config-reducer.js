import {
  SAVE_CONFIGURATION
} from '../actions/action-types'

import { combineReducers } from 'redux'

// This is just an example.
// what we should do is create a more complex selector to extract all the pertinent store info we want to save in the file.
// then in the appropriate reducers, trap on SAVE_CONFIGURATION and overwrite those parameters.

const initialConfigution = {
    "name": "test",
    "description": "Example data file",
    "version": 1,
    "data" : {
      "name" : "dataField"
    }
}

const configuration = (state = initialConfigution, action = {} ) => {
  switch(action.type){
    case SAVE_CONFIGURATION:
      console.info ('saving configuration ', action.payload)
      return action.payload
    
    default:
      return state
  }
}


export default combineReducers({
  configuration
})