import { useState } from 'react';
import './App.css';
  // Make sure the filename matches with 'AddTodo.jsx'
  // Make sure the filename matches with 'Todos.jsx'
import AddTodo from './features/todo/TodoSlice';
import Todos from './components/Todos'

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Learn about Redux Toolkit</h1>
      <div className="container mx-auto px-4">
        <AddTodo />  {/* AddTodo component to add new todos */}
        <Todos />    {/* Todos component to display and remove todos */}
      </div>
    </div>
  );
}

export default App;
