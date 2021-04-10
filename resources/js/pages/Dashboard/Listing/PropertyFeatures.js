import React, { useState, useEffect, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash'
import { Field } from 'react-final-form';
import { Select } from 'final-form-material-ui';

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
  TextField, Checkbox, Radio, TextArea
} from '@material-ui/core';


import { types } from '../../../components/data'


const Condition = ({ when, is, children }) => (
    <Field name={when} subscription={{ value: true }}>
      {props => { return props.input.value === is ? children : null}}
    </Field>
  )

const PropertyFeatures  = () => {

            const homeFeatures = 
            Object.keys(types.owner.sale.homes).map(function(home_type,i){
                return (
                    <Condition when="property_type_name" is={home_type} key={i}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={12}>
                                {
                                    Object.keys(types.owner.sale.homes[home_type]).map(function(heading, i){
                                        let feature
                                        let featuresObject = types.owner.sale.homes[home_type][heading]
                                        const featuresNames = Object.keys(featuresObject)

                                        const featuresHtml = featuresNames.map(function(featureName, i){

                                            feature = featuresObject[featureName]
                                            switch(feature.type) {
                                                case 'TextField':
                                                    return (
                                                        <Grid item key={featureName + i} sm={6}>
                                                            <Field
                                                                name={featureName}
                                                                component={TextField}
                                                                type="text"
                                                                label={feature.title}
                                                            />
                                                        </Grid>
                                                    )
                                                    break;
                                                case 'Select':
                                                    return (
                                                        <Grid item key={featureName + i} sm={6}>
                                                            <Field
                                                                name={featureName}
                                                                component={Select}
                                                                type={Select}
                                                                label={feature.label}
                                                            >
                                                                {
                                                                    Object.keys(feature.options).map(function(optionKey){
                                                                        return (
                                                                            <MenuItem key={optionKey} value={optionKey}>{feature.options[optionKey]}</MenuItem>
                                                                        )
                                                                    })
                                                                }
                                                                

                                                            </Field>
                                                        </Grid>
                                                    )
                                                    break;
                                                case 'Checkbox':
                                                    return (
                                                        <Grid item key={featureName + i} sm={6}>
                                                            <label>
                                                                {feature.title}
                                                                <Field
                                                                    name={featureName}
                                                                    component={Checkbox}
                                                                    type="checkbox"
                                                                    label={feature.title}
                                                                />
                                                            </label>
                                                        </Grid>
                                                    )
                                                    break;
                                            }
                                        })

                                        return (
                                            <div key={i}>
                                                <FormLabel component="legend">{heading}</FormLabel>

                                        
                                                { featuresHtml ? featuresHtml : undefined }
                                        
                                            </div>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Condition>
                )
            })

            const plotFeatures = 
            Object.keys(types.owner.sale.plots).map(function(home_type,i){
                return (
                    <Condition when="property_type_name" is={home_type} key={i}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={12}>
                                {
                                    Object.keys(types.owner.sale.plots[home_type]).map(function(heading, i){
                                        let feature
                                        let featuresObject = types.owner.sale.plots[home_type][heading]
                                        const featuresNames = Object.keys(featuresObject)
                                        const featuresHtml = featuresNames.map(function(featureName, i){

                                            feature = featuresObject[featureName]
                                            switch(feature.type) {
                                                case 'TextField':
                                                    return (
                                                        <Grid item key={featureName + i}>
                                                            <Field
                                                                name={featureName}
                                                                component={TextField}
                                                                type="text"
                                                                label={feature.title}
                                                            />
                                                        </Grid>
                                                    )
                                                    break;
                                                case 'Select':
                                                    return (
                                                        <Grid item key={featureName + i}>
                                                            <Field
                                                                name={featureName}
                                                                component={Select}
                                                                type={Select}
                                                                label={feature.label}
                                                            >
                                                                {
                                                                    Object.keys(feature.options).map(function(optionKey){
                                                                        return (
                                                                            <MenuItem key={optionKey} value={optionKey}>{feature.options[optionKey]}</MenuItem>
                                                                        )
                                                                    })
                                                                }
                                                                

                                                            </Field>
                                                        </Grid>
                                                    )
                                                    break;
                                                case 'Checkbox':
                                                    return (
                                                        <Grid item key={featureName + i}>
                                                            <label>
                                                                {feature.title}
                                                                <Field
                                                                    name={featureName}
                                                                    component={Checkbox}
                                                                    type="checkbox"
                                                                    label={feature.title}
                                                                />
                                                            </label>
                                                        </Grid>
                                                    )
                                                    break;
                                            }
                                        })

                                        return (
                                            <div key={i}>
                                                <FormLabel component="legend">{heading}</FormLabel>

                                        
                                                { featuresHtml ? featuresHtml : undefined }
                                        
                                            </div>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Condition>
                )
            })


            const commercialFeatures = 
            Object.keys(types.owner.sale.commercial).map(function(home_type,i){
                return (
                    <Condition when="property_type_name" is={home_type} key={i}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={12}>
                                {
                                    Object.keys(types.owner.sale.commercial[home_type]).map(function(heading, i){
                                        let feature
                                        let featuresObject = types.owner.sale.commercial[home_type][heading]
                                        const featuresNames = Object.keys(featuresObject)
                                        const featuresHtml = featuresNames.map(function(featureName, i){

                                            feature = featuresObject[featureName]
                                            switch(feature.type) {
                                                case 'TextField':
                                                    return (
                                                        <Grid item key={featureName + i}>
                                                            <Field
                                                                name={featureName}
                                                                component={TextField}
                                                                type="text"
                                                                label={feature.title}
                                                            />
                                                        </Grid>
                                                    )
                                                    break;
                                                case 'Select':
                                                    return (
                                                        <Grid item key={featureName + i}>
                                                            <Field
                                                                name={featureName}
                                                                component={Select}
                                                                type={Select}
                                                                label={feature.label}
                                                            >
                                                                {
                                                                    Object.keys(feature.options).map(function(optionKey){
                                                                        return (
                                                                            <MenuItem key={optionKey} value={optionKey}>{feature.options[optionKey]}</MenuItem>
                                                                        )
                                                                    })
                                                                }
                                                                

                                                            </Field>
                                                        </Grid>
                                                    )
                                                    break;
                                                case 'Checkbox':
                                                    return (
                                                        <Grid item key={featureName + i}>
                                                            <label>
                                                                {feature.title}
                                                                <Field
                                                                    name={featureName}
                                                                    component={Checkbox}
                                                                    type="checkbox"
                                                                    label={feature.title}
                                                                />
                                                            </label>
                                                        </Grid>
                                                    )
                                                    break;
                                            }
                                        })

                                        return (
                                            <div key={i}>
                                                <FormLabel component="legend">{heading}</FormLabel>

                                        
                                                { featuresHtml ? featuresHtml : undefined }
                                        
                                            </div>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Condition>
                )
            })



            return (
                <>
                    {homeFeatures}
                    {plotFeatures}
                    {commercialFeatures}
                </>
            )
}


export default PropertyFeatures;