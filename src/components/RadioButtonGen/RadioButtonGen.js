import React from 'react'
import { RadioGroup, FormControlLabel, Radio, FormLabel, FormControl } from '@material-ui/core'


const RadioButtonGen = ({ properties }) => {
    console.log(properties)
    let input = properties.options.map(option => {
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
        <div className='radio-class'>
            <FormControl component="fieldset">
                <FormLabel component="legend">{properties.label}</FormLabel>
                <RadioGroup aria-label={properties.label} name={properties.name} defaultValue={properties.defaultValue}>
                    {input}
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default RadioButtonGen