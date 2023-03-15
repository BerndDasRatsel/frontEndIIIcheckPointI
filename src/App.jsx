import React, { useState } from 'react';
import TodoList from './TodoList';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...updatedTodo, id: todo.id };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return(
    <div className="App">
      <h1>ToDo</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    title: '',
    category: '',
    date: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo.title || !todo.category || !todo.date) return;
    addTodo({
      ...todo,
      id: Date.now(),
    });
    setTodo({
      id: '',
      title: '',
      category: '',
      date: '',
      description: '',
    });
  };

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Título:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={todo.title}
        onChange={handleInputChange}
      />

      <label htmlFor="category">Categoria:</label>
      <select
        id="category"
        name="category"
        value={todo.category}
        onChange={handleInputChange}
      >
        <option value="">Selecione uma categoria:</option>
        <option value="trabalho">Trabalho</option>
        <option value="lazer">Lazer</option>
        <option value="prioridade">Prioridade</option>
        <option value="outros">Outros</option>
      </select>

      <label htmlFor="date">Data:</label>
      <input
        type="text"
        id="date"
        name="date"
        value={todo.date}
        placeholder="DD/MM/YYYY"
        onChange={handleInputChange}
      />

      <label htmlFor="description">Descrição:</label>
      <textarea
        id="description"
        name="description"
        value={todo.description}
        onChange={handleInputChange}
      />

      <button type="submit">Criar Tarefa</button>
    </form>
  );
}

export default App;