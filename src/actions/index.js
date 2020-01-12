import * as action from './action-types'
const actionCreator = type => payload => ({ type, payload })

export const setAuthError = actionCreator(action.SET_AUTH_ERROR)
export const setAuthorized = actionCreator(action.SET_AUTHORIZED)
export const loginUser = actionCreator(action.LOGIN_USER)
export const logoutUser = actionCreator(action.LOGOUT_USER)
export const getSignedInUser = actionCreator(action.GET_SIGNED_IN_USER)
export const setAuthenticatedUser = actionCreator(action.SET_AUTHENTICATED_USER)
