import React from 'react'
import { RadioGroup, FormControlLabel, Radio, FormLabel, FormControl, Grid } from '@material-ui/core'


const RadioButtonGen = ({ properties }) => {

    let radioInput = properties.map((inputItem) => {
        let input;
        if (inputItem.type === 'radio') {
            input = inputItem.options.map(option => {
                return (
                    <FormControlLabel
                        value={option.value}
                        control={<Radio color="primary" />}
                        label={option.label}
                        disabled={option.disabled}
                        labelPlacement="end" />
                )
            });
            return (
                <Grid item xs ={6}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">{inputItem.label}</FormLabel>
                    <RadioGroup aria-label={inputItem.label} name={inputItem.name} defaultValue={inputItem.defaultValue}>
                        {input}
                    </RadioGroup>
                </FormControl>
            </Grid>
            )
        }
    })
    return radioInput;
}

export default RadioButtonGen