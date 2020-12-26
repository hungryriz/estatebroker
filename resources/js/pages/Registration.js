import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userRegister, setUserMessage } from '../redux/actions/authActions.js';


function Registration() {

    const name = FormField('name');
    const email = FormField('email');
    const password = FormField('password');
    const dispatch = useDispatch();
    const history= useHistory();
    const user = useSelector( store => store.user );
    const [loading, setLoading] = useState(false);

    const handleRegistration = async () => {
        setLoading(true);
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        try {
            await dispatch(userRegister(formData))
            setLoading(false);
        } catch (e) {

        }
    }
    // componentDidMount
    useEffect(function(){
        dispatch(setUserMessage(''));
    },[]);
    useEffect(function(){
        if(user.loggedin === true) {
            history.push('/dashboard');
        }
    }, [user.loggedin]);

    return (
        <div>
        Registration<br />
        <div>
          Name<br />
          <input type="text"  {...name} autoComplete="new-name" id="name"/>
        </div>
        <div>
          Email<br />
          <input type="text"  {...email} autoComplete="new-email" id="email"/>
        </div>
        <div style={{ marginTop: 10 }}>
          Password<br />
          <input type="password" {...password} autoComplete="new-password" id="password" />
        </div>
        <><small style={{ color: 'red' }}>{user.message}</small><br /><br /></>
        <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleRegistration} disabled={loading} /><br />
      </div>
    );
}

function FormField(fieldName){
    const name = fieldName;
    const [value, setValue] = useState('');
    function handleInput(e){
        setValue(e.target.value);
    }
    return {
        name : fieldName,
        value,
        onChange: handleInput
    }
}

export default Registration;