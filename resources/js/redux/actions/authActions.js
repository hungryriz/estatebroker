
function userLogin(username, password) {
    return (dispatch) =>  {
        dispatch({ type: 'USER_LOGIN', username : 'user.username' })
        // Return promise with success and failure actions

        axios({
            method: 'post',
            url: '/api/auth/user',
            data: bodyFormData,
            headers: {'Authorization': `token ${access_token}` }
        })
        .then(function (response) {
            dispatch({ type: USER_LOGIN, username : user.username }).then(() => {
                window.localStorage.set('username', username);
                window.localStorage.set('loggedin', true);
            }); 
        })
        .catch(function (response) {
            dispatch({ type: USER_LOGOUT }).then(() => {
                window.localStorage.set('username', '');
                window.localStorage.set('loggedin', false);
            }); 
        });
    };
}

function userLogout() {
    return (dispatch) => {
        dispatch({ type: 'USER_LOGOUT' })
        // Return promise with success and failure actions
        return axios.get('/api/auth/user').then(  
            user => dispatch({ type: USER_LOGIN, username : user.username }),
            err => dispatch({ type: USER_LOGOUT })
        );
    };
}

export { userLogin, userLogout }