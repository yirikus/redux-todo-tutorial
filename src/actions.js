let nextId = 0;
export const addTodo = (text) => ({ 
    type: 'ADD_TODO',
    text,
    id: nextId++
});

export const setVisibilityFilter = (filter) =>({ 
    type: 'SET_VISIBILITY_FILTER', 
    filter 
});

export const toggle = (id) => ({ 
    type: 'TOGGLE_TODO', 
    id
});