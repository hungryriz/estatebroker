import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userRegister, setUserMessage } from '../redux/actions/authActions.js';


function Registration() {
    const fields = [
        {name: 'name', autoComplete: 'new-name', id : 'name', type: 'text', value : ''},
        {name: 'email', autoComplete: 'new-email', id : 'email', type: 'text', value : ''},
        {name: 'password', autoComplete: 'new-password', id : 'password', type: 'password', value : ''},
        {name: 'phone', autoComplete: 'new-phone', id : 'phone', type: 'text', value : ''},
        {name: 'mobile_phone', autoComplete: 'new-mobile_phone', id : 'mobile_phone', type: 'text', value : ''},
        {name: 'address', autoComplete: 'new-address', id : 'address', type: 'textarea', value : ''},
        {name: 'city', autoComplete: 'new-city', id : 'city', type: 'text', value : ''},
        {name: 'state', autoComplete: 'new-state', id : 'state', type: 'text', value : ''},
        {name: 'country', autoComplete: 'new-country', id : 'country', type:'text', value : ''},
        {name: 'id_card_number', autoComplete: 'new-id_card_number', id : 'id_card_number', type:'text', value : ''}, 
        {name: 'image_path', autoComplete: 'new-image_path', id : 'image_path', type:'text', value : ''},
        {name: 'scope_name', autoComplete: 'new-scope_name', id : 'scope_name', type:'hidden', value: 'agent'},                 
    ];

    const dispatch = useDispatch();
    const history= useHistory();
    const user = useSelector( store => store.user );
    const [loading, setLoading] = useState(false);

    const handleRegistration = async () => {
        setLoading(true);
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('phone').value,
            mobile_phone: document.getElementById('mobile_phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            country: document.getElementById('country').value,
            id_card_number: document.getElementById('id_card_number').value,
            image_path: document.getElementById('image_path').value,
            scope_name: document.getElementById('scope_name').value
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
            {
                fields.map((field, i) => {
                    return (
                    <div key={i}>
                        {field.name.charAt(0).toUpperCase() + field.name.slice(1)}<br />
                        <input {...FormField(field)} />
                    </div>
                    );
                })
            }
            
            <><small style={{ color: 'red' }}>{user.message}</small><br /><br /></>
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleRegistration} disabled={loading} /><br />
        </div>
    );
}

function FormField(fieldObjectsetting){
    const [value, setValue] = useState(fieldObjectsetting.value);
    function handleInput(e){
        setValue(e.target.value);
    }
    return {
        ...fieldObjectsetting,
        value,
        onChange: handleInput,
        key: fieldObjectsetting.name
    }
}

export default Registration;