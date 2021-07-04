import React, { Component } from 'react';
import { Field, Formik, Form } from 'formik';
import EmployeeService from './EmployeeService';

class RegistrationComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            employeeId: '',
            employeeName: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values){
        console.log(values)
        EmployeeService.addEmployee(values).then(() => this.props.history.push(''))
    }

    render() {
        let { employeeId, employeeName } = this.state
        return (
            <div className="container">
                
                <Formik
                    initialValues={{ employeeId, employeeName }}
                    validateOnChange={false}
                    validateOnVlur={false}
                    validate={this.validateProductForm}
                    enableReinitialize={true}
                    onSubmit={this.onSubmit}>
                        <Form>
                        <fieldset className="form-group">
                            <label>Employee Id</label>
                            <Field className="form-control" type="text" name="employeeId" />
                        </fieldset>
                        <br />
                        <fieldset className="form-group">
                            <label>Employee Name</label>
                            <Field className="form-control" type="text" name="employeeName" />
                        </fieldset>
                        <br />
                        <button type="submit" className="btn">Submit</button>
                    </Form>

                    </Formik>
                </div>
        );
    }
}

export default RegistrationComponent;