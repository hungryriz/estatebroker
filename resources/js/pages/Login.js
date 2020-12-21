import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userLogin, userLogout } from '../redux/actions/authActions.js';

 
function Login(props) {

  const user = useSelector(store => store.user)
  const dispatch = useDispatch(); 
  const username = useFormInput('');
  const password = useFormInput('');

  const history = useHistory();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    function handleStatusChange(status) {
      //setIsOnline(status.isOnline);
    }
    console.log(user);

  });

 
  // handle button click of login form
  const handleLogin = () => {
    dispatch(userLogin())
    history.push('/home');
  }
 
  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;
