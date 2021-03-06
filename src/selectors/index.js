export const getAuthError = state => state.auth.authError
export const isAuthenticated = state => state.auth.isAuthenticated
export const getAuthenticatedUser = state => state.auth.getAuthenticatedUser
export const getUser = state => state.auth.getUser
export const getJsonMessage = state => state.message.message 
export const getUrl = state => state.message.url
export const getPostExampleData = state => state.example.postExample
export const getExampleError = state => state.example.error
export const getConfiguration = state =>state.config.configuration
export const getGraphData = state =>state.graph.data
export const getGraphLoading = state =>state.graph.loading
export const getSignalData = state =>state.signal.data
export const getSignalLoading = state =>state.signal.loading