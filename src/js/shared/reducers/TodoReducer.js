import {
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../constants/todos';

const initialState = {};

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_TODO:
            return state.concat(action.text);
        case EDIT_TODO:
            return state.set(action.id, action.text);
        case DELETE_TODO:
            return state.delete(action.id);
        default:
            return state;
    }
}
