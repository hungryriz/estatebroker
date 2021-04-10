import React, { useState, useEffect, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash'
import { Form, Field } from 'react-final-form';
import { Select, TextField, Checkbox } from 'final-form-material-ui';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeRequest } from '../../../components/utils';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  Radio, TextArea
} from '@material-ui/core';

import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
// Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { cities, types } from '../../../components/data'
import PropertyFeatures from './PropertyFeatures'

const property_type_home_types =  Object.keys(types.owner.sale.homes)
const property_type_plots_types =  Object.keys(types.owner.sale.plots)
const property_type_commercial_types =  Object.keys(types.owner.sale.commercial)

const imgPreviewImag = createRef()
const fileCollection = []

let length

const Condition = ({ when, is, children }) => (
    <Field name={when} subscription={{ value: true }}>
      {props => { return props.input.value === is ? children : null}}
    </Field>
  )




function AddNewListingForm({closeAddListForm}) {


  const [message, setMessage] = useState()
  const [images, setImages] = useState([])


  const handleUploadClick = (e) => {
    console.log(e.target.files)

    Array.from(e.target.files).map(
        (f) => {
            fileCollection.push(f)
            console.log(f)
        }
    )

    setImages(fileCollection)
    console.log(fileCollection)
    while (imgPreviewImag.current.firstChild) {
        imgPreviewImag.current.removeChild(imgPreviewImag.current.lastChild);
    }
    Promise.all(fileCollection.map(generatePreviewData)).then(imgs =>
      imgs.map((img, i) => {
        img.setAttribute("index", i);
        imgPreviewImag.current.appendChild(img);
      })
    );
}


  const generatePreviewData = file => {
    const fr = new FileReader();
    return new Promise((resolve, reject) => {
      fr.addEventListener("load", e => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const removeLink = document.createElement("div");
        removeLink.setAttribute('style','text-align: center')
        removeLink.innerHTML = "Remove"
        removeLink.addEventListener("click", e => {
            e.stopPropagation()
            e.preventDefault()
            let img = e.target.parentElement.getElementsByTagName('img')[0]
            let imgContent = img.getAttribute('content')
            let indexToRemove
            if(imgContent) {
                indexToRemove = fileCollection.indexOf(imgContent)
                fileCollection.splice(indexToRemove, 1)
            }
            imgPreviewImag.current.removeChild(e.target.parentElement)
        });
        div.setAttribute("style", "float: left");
        img.src = fr.result;
        img.setAttribute("className", "border rounded img-preview");
        img.setAttribute("content", fr.result);
        img.setAttribute("width", "200");
        div.appendChild(img);
        div.appendChild(removeLink);
        resolve(div);
      });

      fr.addEventListener("error", e => {
        reject();
      });

      fr.readAsDataURL(file);
    });
  };


const onSubmit = async values => {
    
    values = { ...values, images: fileCollection }
    var formData = new FormData()

    for ( var key in values ) {
        if(key != 'images') {
            formData.append(key, values[key]);
        }
    }
    let images = values.images;

    for (var i = 0; i < images.length; i++) {
        formData.append('images[]', images[i], images[i].name);
    }

    await makeRequest('/api/listings', 'post', formData)
    .then(function(response){
        setMessage(response.data.message)
    })
    .catch(function(response){
        setMessage(response.data.message)
    })
    window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};

  if (!values.purpose) {
    errors.purpose = 'Required';
  }
  if (!values.property_type) {
    errors.property_type = 'Required';
  }
  if (!values.property_type_name) {
    errors.property_type_name = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }

  if (!values.property_price) {
    errors.property_price = 'Required';
  }

  if (!values.location) {
    errors.location = 'Required';
  }


  return errors;
};  

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 700 }}>
      <CssBaseline />
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine, values }) => {

            return (
              <form onSubmit={handleSubmit} noValidate>
                <Paper style={{ padding: 16, overflow: 'scroll', height: '700px', width: '80%'}}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <IconButton variant="contained" color="secondary" 
                                    onClick={() => {
                                        closeAddListForm()
                                    }}
                                >
                                    <CancelIcon />
                                </IconButton> 
                            </Grid>
                        </Grid>
                        <Grid item>
                            <FormControl component="label">
                                <FormLabel component="legend">Purpose</FormLabel>
                                <RadioGroup row>
                                    <FormControlLabel
                                        label="Sale"
                                        control={
                                            <Field name="purpose" type="radio">
                                            {props => (
                                                <div>
                                                    <Radio
                                                        required={true}
                                                        name={props.input.name}
                                                        value="sale"
                                                        onChange={props.input.onChange}
                                                    />
                                                </div>
                                            )}
                                            </Field>
                                        }
                                    />
                                    <FormControlLabel
                                        label="Rent"
                                        control={
                                            <Field name="purpose" type="radio">
                                            {props => (
                                                <div>
                                                    <Radio
                                                        required={true}
                                                        name={props.input.name}
                                                        value="rent"
                                                        onChange={props.input.onChange}
                                                    />
                                                </div>
                                            )}
                                            </Field>
                                        }
                                    />
                                    <FormControlLabel
                                        label="Wanted"
                                        control={
                                            <Field name="purpose" type="radio">
                                            {props => (
                                                <div>
                                                    <Radio
                                                        required={true}
                                                        name={props.input.name}
                                                        value="wanted"
                                                        onChange={props.input.onChange}
                                                    />
                                                </div>
                                            )}
                                            </Field>
                                        }
                                    />
                                </RadioGroup>
                            </FormControl>
                            <Grid container>
                                <Grid item xs={12}>
                                {
                                    ['wanted'].map(function(purpose){
                                        return (
                                            <Condition when="purpose" is={purpose} key={purpose}>
                                                <FormControl component="div" key={purpose}>
                                                    <RadioGroup row>
                                                        <FormControlLabel
                                                            label="For Buy"
                                                            control={
                                                                <Field name="wanted-purpose" type="radio">
                                                                {props => (
                                                                    <div>
                                                                        <Radio
                                                                            name={props.input.name}
                                                                            value="buy"
                                                                            onChange={props.input.onChange}
                                                                        />
                                                                    </div>
                                                                )}
                                                                </Field>
                                                            }
                                                        />                            

                                                        <FormControlLabel
                                                            label="For Rent"
                                                            control={
                                                                <Field name="wanted-purpose" type="radio">
                                                                {props => (
                                                                    <div>
                                                                        <Radio
                                                                            name={props.input.name}
                                                                            value="wanted-for-rent"
                                                                            onChange={props.input.onChange}
                                                                        />
                                                                    </div>
                                                                )}
                                                                </Field>
                                                            }
                                                        />    
                                                    </RadioGroup>
                                                </FormControl>
                                            </Condition>
                                        )

                                    })
                                }

                                </Grid>
                                <Grid item xs={12}>
                                    <FormLabel component="legend">Property Type</FormLabel>
                                    <FormControl  component="div">
                                        <RadioGroup row>
                                            <FormControlLabel
                                                label="Homes"
                                                control={
                                                    <Field name="property_type" type="radio">
                                                    {props => (
                                                        <div>
                                                            <Radio
                                                                name={props.input.name}
                                                                value="homes"
                                                                onChange={props.input.onChange}
                                                            />
                                                        </div>
                                                    )}
                                                    </Field>
                                                }
                                            />                            
                                            <FormControlLabel
                                                label="Plots"
                                                control={
                                                    <Field name="property_type" type="radio">
                                                    {props => (
                                                        <div>
                                                            <Radio
                                                                name={props.input.name}
                                                                value="plots"
                                                                onChange={props.input.onChange}
                                                            />
                                                        </div>
                                                    )}
                                                    </Field>
                                                }
                                            />
                                            <FormControlLabel
                                                label="Commercial"
                                                control={
                                                    <Field name="property_type" type="radio">
                                                    {props => (
                                                        <div>
                                                            <Radio
                                                                name={props.input.name}
                                                                value="commercial"
                                                                onChange={props.input.onChange}
                                                            />
                                                        </div>
                                                    )}
                                                    </Field>
                                                }
                                            />                                        
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={12} >
                                    <Condition when="property_type" is="homes">
                                        <FormControl component="div">
                                            <RadioGroup row>
                                                {
                                                    property_type_home_types.map(function(home_type, i){
                                                        return (
                                                            <FormControlLabel
                                                                label={home_type}
                                                                key={i}
                                                                control={
                                                                    <Field name='property_type_name' type="radio" key={home_type + i}>
                                                                    {props => (
                                                                        <div>
                                                                            <Radio
                                                                                name={props.input.name}
                                                                                value={home_type}
                                                                                onChange={props.input.onChange}
                                                                            />
                                                                        </div>
                                                                    )}
                                                                    </Field>
                                                                }
                                                            /> 
                                                        )
                                                    })
                                                }
                                        
                                            </RadioGroup>
                                        </FormControl>
                                    </Condition>
                                    <Condition when="property_type" is="plots">
                                        <FormControl component="div">
                                            <RadioGroup row>
                                                {
                                                    property_type_plots_types.map(function(plot_type, i){
                                                        return (
                                                            <FormControlLabel
                                                                label={plot_type}
                                                                key={i}
                                                                control={
                                                                    <Field name='property_type_name' type="radio">
                                                                    {props => (
                                                                        <div>
                                                                            <Radio
                                                                                name={props.input.name}
                                                                                value={plot_type}
                                                                                onChange={props.input.onChange}
                                                                            />
                                                                        </div>
                                                                    )}
                                                                    </Field>
                                                                }
                                                            /> 
                                                        )
                                                    })
                                                }
                                        
                                            </RadioGroup>
                                        </FormControl>
                                    </Condition>
                                    <Condition when="property_type" is="commercial">
                                        <FormControl component="div">
                                            <RadioGroup row>
                                                {
                                                    property_type_commercial_types.map(function(commercial_type, i){
                                                        return (
                                                            <FormControlLabel
                                                                label={commercial_type}
                                                                key={i}
                                                                control={
                                                                    <Field name='property_type_name' type="radio">
                                                                    {props => (
                                                                        <div>
                                                                            <Radio
                                                                                name={props.input.name}
                                                                                value={commercial_type}
                                                                                onChange={props.input.onChange}
                                                                            />
                                                                        </div>
                                                                    )}
                                                                    </Field>
                                                                }
                                                            /> 
                                                        )
                                                    })
                                                }
                                        
                                            </RadioGroup>
                                        </FormControl>
                                    </Condition>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    name="city"
                                    component={Select}
                                    required
                                    label="Select a City"
                                    style={{minWidth: 200}}
                                >
                                    { 
                                        cities.map(function(city, i){
                                            return (
                                                <MenuItem key={i} value={Object.keys(city)[0]}>{Object.keys(city)[0]}</MenuItem>
                                            )
                                        })
                                    }
                                </Field>
                            </Grid>
                            <Grid item xs={6}>
                                <Field name="city">
                                    {
                                        props => { 
                                            return cities.map(function(city, i){
                                                if(Object.keys(city)[0] ===  props.input.value) {
                                                    let subcities = Object.values(city)[0]
                                                    return (
                                                        <Field
                                                            fullWidth
                                                            name="town"
                                                            component={Select}
                                                            label="Town"
                                                            style={{minWidth: 200}}
                                                            value={''}
                                                            key={i}
                                                        >
                                                            {
                                                                subcities.map(function(cityname, i){
                                                                    return (
                                                                        <MenuItem key={cityname+i+i} value={cityname}>{cityname}</MenuItem>
                                                                    )
                                                                })
                                                            }
                                                        </Field>
                                                    )
                                                }
                                            })
                                        }
                                    }
                                </Field>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={12}>
                                <Field
                                    fullWidth
                                    required
                                    name="location"
                                    component={TextField}
                                    type="text"
                                    label="Location"
                                >                            

                                </Field>
                            </Grid>

                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="property_title"
                                component={TextField}
                                type="text"
                                label="Property Title"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                name="property_description"
                                component={TextareaAutosize}
                                type="textarea"
                                rows="5"
                                label="Property Description"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="property_price"
                                component={TextField}
                                type="text"
                                label="Price / Budget"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Field
                                name="land_area"
                                component={TextField}
                                rows="3"
                                label="Land Area"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Field
                                fullWidth
                                name="area_unit"
                                component={Select}
                                label="Unit Area"
                                style={{minWidth: 200}}
                            >
                                <MenuItem key={'Square Feet'} value='Square Feet'>Square Feet</MenuItem>
                                <MenuItem key={'Square Yards'} value='Square Yards'>Square Yards</MenuItem>
                                <MenuItem key={'Square Meters'} value='Square Meters'>Square Meters</MenuItem>
                                <MenuItem key={'Marla'} value='Marla'>Marla</MenuItem>
                                <MenuItem key={'Kanal'} value='Kanal'>Kanal</MenuItem>
                            </Field>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    name="bedrooms"
                                    component={Select}
                                    label="Bedrooms"
                                    style={{minWidth: 200}}
                                >
                                    {
                                        ['Studio',1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(function(i){
                                            return <MenuItem key={i+i} value={i}>{i}</MenuItem>
                                        })
                                    }
                                </Field>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    name="bathrooms"
                                    component={Select}
                                    label="Bathrooms"
                                    style={{minWidth: 200}}
                                >
                                    {
                                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(function(i){
                                            return <MenuItem key={i+i+i} value={i}>{i}</MenuItem>
                                        })
                                    }
                                </Field>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    name="expires_after"
                                    component={TextField}
                                    label="Expires After"
                                    style={{minWidth: 200}}
                                >
                                </Field>
                            </Grid>
                        </Grid>

                        <Grid container justify="center" alignItems="center">
                            <input
                                accept="image/*"
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={handleUploadClick}
                                name="images[]"
                            />
                            <label htmlFor="contained-button-file">
                                <Fab component="span">
                                    <AddPhotoAlternateIcon />
                                </Fab>
                            </label>
                            <br />
                            <div ref={imgPreviewImag}></div>
                        </Grid>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Features </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <PropertyFeatures />
                            </AccordionDetails>
                        </Accordion>                


                        <Grid container justify="center" alignItems="center">
                            <Grid item style={{ marginTop: 16 }}>
                                <Button
                                    type="button"
                                    variant="contained"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Reset
                                </Button>
                            </Grid>
                            <Grid item style={{ marginTop: 16 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={submitting || pristine}
                                >
                                    Submit
                                </Button>

                            </Grid>
                            <Grid item>
                                <div id="message">{message}</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
              </form>
          )
        }}
      />
    </div>
  );
}

export default AddNewListingForm;