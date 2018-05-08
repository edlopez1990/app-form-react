
import { combineReducers } from "redux"

const initialState = {
  auth: {
    authorize: false,
    token: null,
    isActive: false,
    store_uuid: null,
    secret:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkYXRhcGFnYS5jb20iLCJuYW1lIjoiZGF0YXBhZ2EifQ.nhhJX5PWbV3hj4Z9n7WdjKkixp7Fj5EL_vqhotwziBY',
    kyc:false
  },
  userOptions: {
    useTestData: false
  },
  numberForDummy: {
    number: 0,
    isActive: false
  },
  setinnerHeight:{
    innerHeight:0
  }
}

// const action = {
//   type: "SET_ALLOW_AUTH",
//   payload: {}
// }

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_RAND_dummy":
      return {
        ...state,
        numberForDummy: {
          ...action.payload
        }
      }
    case "SET_AUTH":
      return {
        ...state,
        ...action.payload
      }
    case "SET_INNERHEIGHT":
      return {
      ...state,
        setinnerHeight:{
          ...action.payload
      } 
    }
    case "SET_USER_OPTIONS":
      return {
        ...state,
        userOptions: {
          ...action.payload
        }
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  mainReducer
})

export default reducer
