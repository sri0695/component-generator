import React from 'react'
import { MenuItem, Select, InputLabel,Grid } from '@material-ui/core';

const SelectComponentGen = ({ properties }) => {

    let selectInput = properties.map((inputItem) => {
        let input;
        if (inputItem.type === 'select') {
            input = inputItem.options.map(option => {
                return (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                )
            });
            return (
                <Grid item xs ={6}>
                    <InputLabel id={inputItem.id}>{inputItem.label}</InputLabel>
                    <Select
                        id={inputItem.id}
                        label={inputItem.id}
                        defaultValue={inputItem.defaultValue}
                    >{input}
                    </Select>
                </Grid>
            )
        }
    })
    return selectInput;
}

export default SelectComponentGen