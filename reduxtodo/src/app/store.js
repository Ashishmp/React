import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/TodoSlice'  // Corrected import

export const store = configureStore({
    reducer: {
        todos: todoReducer  // Usually, the slice reducer should be assigned to a key (e.g., 'todos')
    }
})
