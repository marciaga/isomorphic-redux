import {
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from '../constants/todos';

export function createTodo(text) {
    return {
        type: CREATE_TODO,
        text,
        date: Date.now()
    }
}
export function editTodo(id, text) {
    return {
        type: EDIT_TODO,
        id,
        text,
        date: date.now()
    };
}
export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    };
}
