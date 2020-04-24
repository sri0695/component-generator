import React from 'react'
import { MenuItem, Select, InputLabel } from '@material-ui/core';

const SelectComponentGen = ({ properties }) => {
    let input = properties.options.map(option => {
        return (
            <MenuItem value={option.value}>{option.label}</MenuItem>
        )
    });
    return (<div className='select-class'>
        <InputLabel id={properties.id}>{properties.label}</InputLabel>
        <Select
            autoWidth={true}
            id={properties.id}
            label={properties.id}
            defaultValue={properties.defaultValue}
        >{input}
        </Select>
    </div>
    )
}

export default SelectComponentGen