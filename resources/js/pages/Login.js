import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLogin , setUserMessage } from '../redux/actions/authActions.js';

 
function Login(props) {

  const user = useSelector(store => store.user)
  const dispatch = useDispatch(); 
  const email = useFormInput('email');
  const password = useFormInput('password');

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

    // componentDidMount
    useEffect(function(){
        dispatch(setUserMessage(''));
        console.log(__filename);
    },[]);

    useEffect(() => {
        if(user.loggedin === true) {
            history.push('/dashboard');
        } else {
            console.log(__filename);
        }
    }, [user.loggedin]);

 
  // handle button click of login form
  const handleLogin = async () => {
    setLoading(true);
    var email = document.getElementById('login_email').value;
    var password = document.getElementById('login_password').value;
    try {
        await dispatch(userLogin(email, password));
        setLoading(false);
    } catch(e) {
        setMessage(e);
    }
  }
 
  return (
    <div>
      Login<br /><br />
      <div>
        Email<br />
        <input type="text"  {...email} autoComplete="new-password" id="login_email"/>
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" id="login_password" />
      </div>
      <><small style={{ color: 'red' }}>{user.message}</small><br /><br /></>
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = fieldname => {
  const [value, setValue] = useState('');
 
  const handleChange = e => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
    name: fieldname
  }
}
 
export default Login;
