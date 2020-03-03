import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
    items:[
        {id:1, name:'Yashwant'},
        {id:2, name:'Mohan'},
        {id:3, name:'Shyam'},
        {id:4, name:'Ram'}
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state.items
            }
        default:
            return state;
    }
}