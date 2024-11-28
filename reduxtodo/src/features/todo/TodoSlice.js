import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Create a new todo object using the nanoid for unique id and the text from action payload
      const todo = {
        id: nanoid(),
        text: action.payload,  // Payload should be the new todo text
      };
      // Add the new todo to the todos array
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // Filter out the todo with the matching id from the todos array
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export the actions (addTodo and removeTodo) to be used in components
export const { addTodo, removeTodo } = todoSlice.actions;

// Export the reducer for configuration in the store
export default todoSlice.reducer;
