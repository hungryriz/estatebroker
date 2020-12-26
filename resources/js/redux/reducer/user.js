const userInitialState = {
  email : '',
  loggedin: false,
  message: '',
  accessToken: ''
}

export default function user(state = userInitialState, action) {
    switch (action.type) {
      case 'USER_LOGIN':
        state = { 
          ...state, 
          email: action.email, 
          loggedin: true, 
          message: 'User logged in', 
          accessToken: action.accessToken 
        };
        return state;
      case 'USER_LOGOUT':
        state = { 
          ...state, email: '', 
          loggedin: false, 
          message: 'User logged out', 
          accessToken: ''
        };
        return state;
      case 'USER_SET_MESSAGE':
        state = { 
          ...state, 
          message: 
          action.message
        };
        return state;
      default:
        return state;
    }

  }