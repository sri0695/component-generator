import React, { Component } from 'react'
import './ComponentGenerator.css'

class ComponentGenerator extends Component {
    constructor(props) {
        super(props);

    }
    state = {

    }

    generateComponent = () => {
        let model = this.props.model;
        let formUI = model.map((inputItem) => {
            let props = inputItem.props || {};

            let input = (
                <input {...props}
                    className='input-item'
                    type={inputItem.type}
                    key={inputItem.key}
                    name={inputItem.name}
                    value={inputItem.value}
                />
            );

            if (inputItem.type === 'radio') {

                input = inputItem.options.map(option => {

                    return (
                        <React.Fragment key={option.key}>
                            <input {...props}
                                type={inputItem.type}
                                key={option.key}
                                name={option.name}
                                value={option.value}
                            />
                            <label key={option.key}>{option.key}</label>
                        </React.Fragment>
                    )
                });
                input = <div>{input}</div>
            }

            if (inputItem.type === 'select') {
                input = inputItem.options.map(option => {
                    return (
                        <option
                            {...props}
                            key={option.key}
                            name={option.name}
                            value={option.value}>
                            {option.value}
                        </option>
                    )
                });
                input = <select>{input}</select>


            }

            return (
                <div className="input-group">
                    <label className="input-label"
                        key={inputItem.key}
                        htmlFor={inputItem.key}>
                        {inputItem.label}
                    </label>
                    {input}
                </div>
            )

        });
        return formUI;
    }

    render() {
        return (
            <div className='component-generator'>
                <form className='input-generator'>
                    {this.generateComponent()}
                </form>
            </div>
        )
    }

}

export default ComponentGenerator