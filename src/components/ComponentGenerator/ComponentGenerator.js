import React, { Component } from 'react'
import './ComponentGenerator.css'
import { TextField, Grid } from '@material-ui/core';
import NavBar from '../NavigationBar/NavBar';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import RadioButtonGen from '../RadioButtonGen/RadioButtonGen';
import SelectComponentGen from '../SelectComponentGen/SelectComponentGen';
import TableComponentGen from '../TableComponentGen/TableComponentGen'
import  Button  from '@material-ui/core/Button';

class ComponentGenerator extends Component {
    constructor(props) {
        super(props);
    }
    state = {
    }

    generateComponent = () => {

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

    materialGenerator = () => {
        let formUI = this.props.model.map((inputItem) => {
            let input;
            if (inputItem.type === 'text' || inputItem.type === 'number') {
                input = (<Grid item xs ={6}>
                    <TextField className='text-input' id={inputItem.id} label={inputItem.label} required={inputItem.isRequired} size='medium'
                        type={inputItem.type} helperText={inputItem.helperText} defaultValue={inputItem.defaultValue}>
                    </TextField>
                    </Grid> );
            }

            if (inputItem.type === 'date') {
                let selectedDate = (inputItem.defaultValue) ? new Date(inputItem.defaultValue) : new Date('2014-08-18T21:11:54');
                const handleDateChange = (date) => {
                    selectedDate = date
                }
                input = (<Grid item xs ={6}>
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
                </Grid>)
            }
            if (inputItem.type === 'radio') {
                input = <RadioButtonGen properties={this.props.model} />
            }
            if (inputItem.type === 'select') {
                input = <SelectComponentGen properties={this.props.model} />
            }
            if (inputItem.type === 'table') {
                input = <TableComponentGen properties={this.props.model} />
            }
            if(inputItem.type === 'button'){
                input =(<Grid item xs ={12}>
                    <Button 
                    id = {inputItem.id}
                    color = {inputItem.color}
                    disabled = {inputItem.disabled}
                    variant="contained" 
                     >{inputItem.label} </Button>
                </Grid>
                )
            }

            return (
                <div className="input-group">
                    {/* <Grid item xs={6}> */}
                        {input}
                    {/* </Grid> */}
                </div>
            )
        });
        return formUI;
    }

    render() {
        return (
            <div>
                <NavBar />
                <form>
                    {this.materialGenerator()}
                </form>
            </div>
        )
    }

}

export default ComponentGenerator