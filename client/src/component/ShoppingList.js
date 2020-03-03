import React, { Component } from 'react';
import { Container, Table, Button } from 'reactstrap';
import {connect} from 'react-redux';
import {getItems} from '../actions/itemAction';
import PropTypes from 'prop-types';
class ShoppingList extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
    }

    componentDidMount(){
        this.props.getItems();
        this.state.items = this.props.item.items;
    }

    removeItem(e){
        console.log('e',e);   
    }

    render() {
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

    renderRows(data){
        return (
            <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td><Button onClick={function(){ this.removeItem(data) }} color="danger">&times;</Button></td>
            </tr>
        );
    }
}

// export default ShoppingList;
ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({item:state.item});

export default connect(mapStateToProps, {getItems})(ShoppingList);