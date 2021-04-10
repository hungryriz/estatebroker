import React, { useState, useEffect, Fragment, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeRequest } from './utils'
import _ from 'lodash'
import CloseIcon from '@material-ui/icons/Close';

import { IconButton, Select, Button, TextField, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

const getModalStyle = () => {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
};


// const useStyles1 = makeStyles((theme) => {
//  console.log(theme)
// });

function Form({
    fields, 
    handleSubmitFunction = () => {}, 
    handleSubmitErrorFunction = () => {}, 
    formHeading, 
    requestUrl, 
    getFormType,
    modalClose =() => {},
    isShowModal = () => { return false },
    isModal = false,
    getEditFormData
}) {
    const classes = useStyles()
    const editformdata = getEditFormData()
    fields = [
        {name: 'id', autoComplete: 'new-name', id : 'name', type: 'text', value : '', disabled: true},
        {name: 'name', autoComplete: 'new-email', id : 'email', type: 'text', value : ''},
        {name: 'phone', autoComplete: 'new-password', id : 'password', type: 'password', value : ''},
        {name: 'mobile_phone', autoComplete: 'new-mobile_phone', id : 'mobile_phone', type: 'text', value : ''},
        {name: 'address', autoComplete: 'new-address', id : 'address', type: 'textarea', value : ''},
        {name: 'city', autoComplete: 'new-city', id : 'city', type: 'text', value : ''},
        {name: 'state', autoComplete: 'new-state', id : 'state', type: 'text', value : ''},
        {name: 'country', autoComplete: 'new-country', id : 'country', type:'text', value : ''},
        {name: 'party_id', autoComplete: 'new-id_card_number', id : 'id_card_number', type:'text', value : '', datafetchcontroller: '/api/parties', datafieldstodisplay:{address: 'address', city: 'city', phone: 'phone'}}, 
        {name: 'user_id', autoComplete: 'new-image_path', id : 'image_path', type:'hidden', value : ''},
    ];

    const dispatch = useDispatch();
    const history= useHistory();
    const user = useSelector( store => store.user );
    const [loading, setLoading] = useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [message, setMessage] = useState()
    const [fieldswithdata, setFieldswithdata] = useState(fields)

    const associatedTableData = (datafetchcontroller) => {
        try {
            return makeRequest(datafetchcontroller, 'GET')
        } catch (e) {
            setMessage(e.message)
        }
    }

    useEffect(function(){
        const addAssociatedDataTOFields = async function() {
            let columnsData
            let fieldsWithDataLocal = []
            let mounted = true;
            let promises = await fields.map(function(field, i){
                if(field.datafetchcontroller) {
                    return associatedTableData(field.datafetchcontroller)
                    .then(function(response){
                        // console.log('field.associatedtabledata useeffects')
                        // console.log(response.data[0])
                        field.associatedtabledata = response.data[0]
                        return field
                        // console.log('fieldswithdata useeffects')
                        // console.log(fieldswithdata)
                        // setFieldswithdata(fieldswithdata)
                    })
                } else {
                    return field
                }
            })

            const results = await Promise.all(promises);
            if(mounted) {
                setFieldswithdata(results)
            }
            
             return () => mounted = false;
        }

        addAssociatedDataTOFields();
        
    },[])


    const handleSubmit = () => {
        setLoading(true);
        const formData = {}
        const fieldNames = _.map(fields, "name");
        const fieldIds = _.map(fields, "id");
        fieldNames.map(
            (fieldName, i) => formData[fieldName] = 
                document.getElementById(fieldIds[i]) ? document.getElementById(fieldIds[i]).value : ''
        )
        
        try {
            let id = document.getElementsByName("id") ? document.getElementsByName("id")[0].value : null;
            makeRequest(requestUrl + '/' + id, 'PUT', formData)
            .then(function(response){
                setMessage(response.data.message)
            })
            .catch(function(){
                handleSubmitErrorFunction()
            });
            setLoading(false);
        } catch (e) {
            setMessage(e.message)
        }
    }

    return (
            <Fragment>
                <div style={getModalStyle()} className={classes.paper}>
                    <IconButton variant="contained" onClick={() => {modalClose()}}>
                        <CloseIcon />
                    </IconButton>
                    { formHeading } <br />
                    {
                        fieldswithdata.map((field, i) =>  {

                            if(field) {
                                field.value = editformdata[field.name]
                                return (
                                    <div key={i}>
                                        { field.name }<br />

                                        <FormField fieldObjectsetting={field} />
                                    </div>
                                );
                            } 

                        })
                    }
                    <><small style={{ color: 'red' }}>{message}</small><br /><br /></>
                    <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Loading...' : 'Submit'}
                    </Button>
                    <br />
                </div>
            </Fragment>
    )
}

function FormField(props) {
    const [value, setValue] = useState(props.fieldObjectsetting.value);
    function handleInput(e){
        setValue(e.target.value);
    }

    let fieldObjectsetting = {
        ...props.fieldObjectsetting,
        value,
        onChange: handleInput,
        key: props.fieldObjectsetting.name
    }

    switch(props.fieldObjectsetting.type) {
    
        case 'text':
            if(props.fieldObjectsetting.associatedtabledata) {
                return (
                    <>
                        {
                            Object.keys(props.fieldObjectsetting.datafieldstodisplay).map(function(field, i){
                                return (
                                    <Typography variant="body1" key={i}>{props.fieldObjectsetting.associatedtabledata[field]}</Typography>
                                )
                            }) 
                        }
                    </>
                )
            }
            
            return <TextField {...fieldObjectsetting} />

          break;
        case 'select':
            return <TextField {...fieldObjectsetting} />
          break;
        default:
            return <TextField {...fieldObjectsetting} />
          // code block
      }

    

}

export default Form;