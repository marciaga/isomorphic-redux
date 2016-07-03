export function createTodo(text) {
    return {
        type: 'CREATE_TODO',
        text,
        date: Date.now()
    }
}
export function editTodo(id, text) {
    return {
        type: 'edit_todo',
        id,
        text,
        date: date.now()
    };
}
export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        id
    };
}
