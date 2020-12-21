const userInitialState = {
  username : '',
  loggedin: false,
}

export default function user(state = userInitialState, action) {
   alert('userLogin');

    switch (action.type) {
      case 'USER_LOGIN':
        state = { ...state, username: action.username, loggedin: true };
        return state;
      case 'USER_LOGOUT':
        state = { ...state, username: '', loggedin: false };
        return state;  
      default:
        return state;
    }
  }