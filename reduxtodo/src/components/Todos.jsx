import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    // Initializing input state for each todo
    const [input, setInput] = useState({}); // Store input per todo item

    // Handle input change for each todo
    const handleInputChange = (id, newText) => {
        setInput(prevState => ({
            ...prevState,
            [id]: newText, // Save the input per todo item
        }));
    };

    // Handle Save when editing
    const handleSave = (id) => {
        const text = input[id]; // Get the updated text for the specific todo
        if (text) {
            // Dispatch the action to update the todo with the edited input
            dispatch(updateTodo({ id, text }));
            // Reset the input for the specific todo item
            setInput(prevState => {
                const newState = { ...prevState };
                delete newState[id]; // Remove the edited todo from the state after saving
                return newState;
            });
        }
    };

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {/* If input exists for this todo, show an input field */}
                        {input[todo.id] !== undefined ? (
                            <>
                                <input
                                    type="text"
                                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    value={input[todo.id]}
                                    onChange={(e) => handleInputChange(todo.id, e.target.value)} // Update input as user types
                                />
                                <button
                                    onClick={() => handleSave(todo.id)} // Save the edited todo
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md ml-2"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                  >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="text-white">{todo.text}</div>
                                <button
                                    onClick={() => handleInputChange(todo.id, todo.text)} // Enable editing for this todo
                                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md ml-2"
                                >
                                    Edit
                                </button>
                            </>
                        )}

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md ml-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos;
