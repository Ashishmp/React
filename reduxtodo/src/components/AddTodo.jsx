import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo({ todoToEdit }) {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    // If there is a todo to edit, populate the input field with the todo's text
    useEffect(() => {
        if (todoToEdit) {
            setInput(todoToEdit.text); // Pre-fill the input field with the todo text
        }
    }, [todoToEdit]);

    const addTodoHandler = (e) => {
        e.preventDefault();

        if (input.trim() !== "") {
            if (todoToEdit) {
                // If editing an existing todo, dispatch the update action
                dispatch(updateTodo({ id: todoToEdit.id, text: input }));
            } else {
                // If adding a new todo, dispatch the addTodo action
                dispatch(addTodo(input));
            }
            setInput('');
        } else {
            console.log("Input is empty, todo not added.");
        }
    };

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {todoToEdit ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    );
}

export default AddTodo;
