import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, editTodo }) {
  const[isEditing, setIsEditing] = useState(false);
  const[updatedTodo, setUpdatedTodo] = useState({
    id: todo.id,
    title: todo.title,
    category: todo.category,
    date: todo.date,
    description: todo.description,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedTodo({
      ...updatedTodo,
      [name]: value,
    });
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    editTodo({
      id: updatedTodo.id,
      title: updatedTodo.title,
      category: updatedTodo.category,
      date: updatedTodo.date,
      description: updatedTodo.description,
    });
    setIsEditing(false);
  };

  return(
    <div className="todo-item">
      {isEditing ? (
        <form className="todo-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="title"
            value={updatedTodo.title}
            onChange={handleInputChange}
          />
          <select
            name="category"
            value={updatedTodo.category}
            onChange={handleInputChange}
          >
            <option value="trabalho">Trabalho</option>
            <option value="lazer">Lazer</option>
            <option value="prioridade">Prioridade</option>
            <option value="outros">Outros</option>
          </select>
          <input
            type="text"
            name="date"
            placeholder="DD/MM/AAAA"
            value={updatedTodo.date}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            value={updatedTodo.description}
            onChange={handleInputChange}
          />
          <button type="submit">Salvar</button>
        </form>
      ) : (
        <>
          <h3>{todo.title}</h3>
          <p>Categoria: {todo.category}</p>
          <p>Data: {todo.date}</p>
          <p>Descrição: {todo.description}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;