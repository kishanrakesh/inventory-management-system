import React, { Component } from 'react';
import ItemService from './ItemService';

class ItemAssignmentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'',
            items: []
        }
        this.refreshItems = this.refreshItems.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount(){
        this.refreshItems();
        console.log(this.state.items);
    }

    refreshItems(){
        ItemService.retrieveUnassignedItems().then(
            response => {
                this.setState({
                    items : response.data
                   
                })
            }
        )

    }

    assignItem(itemId,employeeId){
        ItemService.assignItem(itemId,employeeId).then(
            response => {
                if (response.status=="200")
                    this.setState({
                        message: `${itemId} Assigned Successful`
                    }, this.refreshItems())
                else
                    this.setState({
                        
                        message: "Assignment Unsuccessful, No Error"
                    })
            }).catch(e => {
            this.setState({
                message: "Assignment Unsuccessful, with Error"
            })
        })
    }

    addItem(){
        this.props.history.push("/additem")
    }

    render() {
        return (
            <div>
                <h2>Item App</h2>
                <div className="container">
                    {this.state.message}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item Id</th>
                                <th>Item Name</th>
                                <th></th>
                            </tr>
                            {
                                this.state.items.map(item => 
                                    <tr key={item.itemId}>
                                    <td>{item.itemId}</td>
                                    <td>{item.itemName}</td>
                                    <td><button className="btn btn-primary" onClick={() => this.assignItem(item.itemId,1)}>Assign</button></td> </tr>)
                            }
                        </thead>
                    </table>
                    <div><button className="btn btn-primary" onClick={this.addItem}>AddItem</button></div>
                </div>
            </div>
        );
    }
}

export default ItemAssignmentComponent;


/*
import React, { Component } from 'react';

class ItemFormComponent extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ItemFormComponent;
*/