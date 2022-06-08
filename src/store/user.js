const initialState = {
  name: 'mattia',
  loggedIn: false
}
export function userReducer(state = initialState, action) {
  return state
}

// Selectors
export const getName = (state) => state.user.name;
