import * as action from './action-types'
const actionCreator = type => payload => ({ type, payload })

export const setAuthError = actionCreator(action.SET_AUTH_ERROR)
export const setAuthorized = actionCreator(action.SET_AUTHORIZED)
export const loginUser = actionCreator(action.LOGIN_USER)
export const logoutUser = actionCreator(action.LOGOUT_USER)
export const getSignedInUser = actionCreator(action.GET_SIGNED_IN_USER)
export const setAuthenticatedUser = actionCreator(action.SET_AUTHENTICATED_USER)

export const fetchJsonHello = actionCreator(action.FETCH_JSON_HELLO)
export const setError = actionCreator(action.SET_ERROR)
export const setMessage = actionCreator(action.SET_MESSAGE)

export const getExample = actionCreator (action.GET_EXAMPLE)
export const putExample = actionCreator (action.PUT_EXAMPLE)
export const postExample = actionCreator (action.POST_EXAMPLE)
export const errorExample = actionCreator(action.ERROR_EXAMPLE)
