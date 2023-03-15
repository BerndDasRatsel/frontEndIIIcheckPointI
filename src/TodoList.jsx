import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, editTodo }) {
  return(
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;