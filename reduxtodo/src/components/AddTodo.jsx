import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice'  // Import the addTodo action from the TodoSlice

function AddTodo() {
  const [input, setInput] = useState('')  // State to store the input value for the new todo
  const dispatch = useDispatch()  // Get the dispatch function to interact with Redux

  // Handler function to add a new todo when the form is submitted
  const addTodoHandler = (e) => {
    e.preventDefault()  // Prevent the default form submission behavior
    if (input.trim() !== '') {  // Ensure that the input is not empty before dispatching
      dispatch(addTodo(input))  // Dispatch the addTodo action with the input value
      setInput('')  // Clear the input field after submitting
    }
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}  // Bind the input value to the local state
        onChange={(e) => setInput(e.target.value)}  // Update the input state when the user types
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo  // Export the AddTodo component
