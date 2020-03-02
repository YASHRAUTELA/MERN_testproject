import React, { Component } from 'react';
import { Container, Table, Button } from 'reactstrap';

class ShoppingList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items:[]
        }
    }

    render() {
        this.state.items =[
            { id: 1, name: 'Yashwant' },
            { id: 2, name: 'Ram' },
            { id: 3, name: 'Shyam' },
            { id: 4, name: 'Mohan' }
        ];
        const { items } = this.state;

        return (
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(this.renderRows)}
                    </tbody>
                </Table>
            </Container>
        );
    }

    renderRows(props){
        return (
            <tr key={props.id}>
                <th scope="row">{props.id}</th>
                <td>{props.name}</td>
                <td><Button onClick={()=>{ this.removeItem(props.id) }} color="danger">&times;</Button></td>
            </tr>
        );
    }

    removeItem(id){
        alert(id);
    }
}

export default ShoppingList;