import React from 'react'
import './ComponentGenerator.css'
import { TextField, InputLabel, FormControlLabel, Checkbox, Switch } from '@material-ui/core';
import NavBar from '../NavigationBar/NavBar';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import RadioButtonGen from '../RadioButtonGen/RadioButtonGen';
import SelectComponentGen from '../SelectComponentGen/SelectComponentGen';
import TableComponentGen from '../TableComponentGen/TableComponentGen';
import StepperComponenet from '../StepperComponent/StepperComponent';
import Button from '@material-ui/core/Button';


function ComponentGenerator({ model }) {

    const [checked, setChecked] = React.useState(true);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [switched, setSwitchState] = React.useState(false);

    const handleSwitchChange = (event) => {
        setSwitchState(event.target.checked);
    };

    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const generateComponent = () => {

        // return (
        //     <div className="input-group">
        //         <label className="input-label"
        //             key={inputItem.key}
        //             htmlFor={inputItem.key}>
        //             {inputItem.label}
        //         </label>
        //         {input}
        //     </div>
        // )
    }

    const materialGenerator = () => {
        let formUI = model.map((inputItem) => {
            let input;
           if (inputItem.type === 'subHead') {
                input = (
                    <div className='subhead-class'>
                        <InputLabel id={inputItem.id} disabled={inputItem.disabled} required={inputItem.isRequired} >{inputItem.label}</InputLabel>
                    </div>
                )
            }
            if (inputItem.type === 'text' || inputItem.type === 'number') {
                input = (<div className='input-class'>
                    <TextField className='text-input' id={inputItem.id} label={inputItem.label} required={inputItem.isRequired} size='medium'
                        type={inputItem.type} helperText={inputItem.helperText} defaultValue={inputItem.defaultValue} disabled={inputItem.disabled}>
                    </TextField>
                </div>
                );
            }

            if (inputItem.type === 'date') {
                input = (<div className='date-class'>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id={inputItem.id}
                            label={inputItem.label}
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                )
            }
            if (inputItem.type === 'radio') {
                input = <RadioButtonGen properties={inputItem} />
            }
            if (inputItem.type === 'select') {
                input = <SelectComponentGen properties={inputItem} />
            }
            if (inputItem.type === 'checkbox') {
                input = (<div className='checkbox-class'>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleCheckChange}
                                name={inputItem.id}
                                required={inputItem.isRequired}
                                disabled={inputItem.disabled}
                                color="primary"
                            />
                        }
                        label={inputItem.label}
                    />
                </div>)
            }

            if (inputItem.type === 'switch') {
                input = (<div className='switch-class'>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={switched}
                                onChange={handleSwitchChange}
                                name={inputItem.id}
                                disabled={inputItem.disabled}
                                color="primary"
                            />
                        }
                        label={inputItem.label}
                    />
                </div>)
            }
            if (inputItem.type === 'table') {
                input = <TableComponentGen properties={inputItem} />
            }
            if (inputItem.type === 'button') {
                input = (<div className='button-class'>
                    <Button
                        id={inputItem.id}
                        color={inputItem.color}
                        disabled={inputItem.disabled}
                        variant="contained"
                    >{inputItem.label} </Button>
                </div>
                )
            }

            return (<div className='input-items'>{input}</div>)
        });
        return formUI;
    }


    return (
        <div className='container-class'>
            <NavBar />
            <StepperComponenet />
            {/* <form> */}
            {materialGenerator()}
            {/* </form> */}
        </div>
    )
}


export default ComponentGenerator