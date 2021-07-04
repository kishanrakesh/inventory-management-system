import React, { Component } from 'react';
import { Field, Formik, Form } from 'formik';
import ItemService from './ItemService';

class ItemFormComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemId: '',
            itemName: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values){
        console.log(values)
        ItemService.addItem(values).then(() => this.props.history.push(''))
    }

    render() {
        let { itemId, itemName } = this.state
        return (
            <div className="container">
                
                <Formik
                    initialValues={{ itemId, itemName }}
                    validateOnChange={false}
                    validateOnVlur={false}
                    validate={this.validateProductForm}
                    enableReinitialize={true}
                    onSubmit={this.onSubmit}>
                        <Form>
                        
                        <fieldset className="form-group">
                            <label>Item Id</label>
                            <Field className="form-control" type="text" name="itemId" />
                        </fieldset>
                        <br />
                        <fieldset className="form-group">
                            <label>Item Name</label>
                            <Field className="form-control" type="text" name="itemName" />
                        </fieldset>
                        <br />
                        <button type="submit" className="btn">Submit</button>
                    </Form>

                    </Formik>
                </div>
        );
    }
}

export default ItemFormComponent;