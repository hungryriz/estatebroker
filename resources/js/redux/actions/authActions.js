function userLogin(email, password) {
    return (dispatch) =>  {
        return axios({
            method: 'post',
            url: '/api/auth/login',
            data: {email: email, password: password}
        })
        .then(function (response) {
            dispatch({ type: 'USER_LOGIN', email : response.data.email, accessToken: response.data.accessToken });
        })
        .catch(function (error) {
            dispatch({ type: 'USER_LOGOUT' });
            dispatch({ type: 'USER_SET_MESSAGE', message: error.message})
        });
    };
}


function userRegister(formData) {
    return (dispatch) =>  {
        return axios({
            method: 'post',
            url: '/api/auth/register',
            data: formData
        })
        .then(function (response) {
            dispatch({ type: 'USER_LOGIN', ...response, accessToken: response.data.accessToken });
        })
        .catch(function (error) {
            dispatch({ type: 'USER_LOGOUT' });
            dispatch({ type: 'USER_SET_MESSAGE', message: error.message})
        });
    };
}

function userLogout() {
    return (dispatch) => {
        // Return promise with success and failure actions
        const store = JSON.parse(window.localStorage.getItem('store'))
        return axios({
            method: 'post',
            url: '/api/auth/logout',
            headers: { Authorization: `Bearer ${store.user.accessToken}` }
        })
        .then(  
            response => dispatch({ type: 'USER_LOGOUT' }),
            err => dispatch({ type: 'USER_LOGOUT' }),
        );
    };
}

function setUserMessage(message) {
    return (dispatch) => {
        dispatch({ type: 'USER_SET_MESSAGE', message: message})
    }
}

export { userLogin, userLogout, userRegister, setUserMessage }