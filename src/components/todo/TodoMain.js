import React from 'react';
import TodoItem from './TodoItem';
import './css/TodoMain.css';

const TodoMain = ({ todoList }) => {

  const { id } = todoList;  
  return (
    <ul className="todo-list">
        {
            todoList.map(todo => <TodoItem key={id} todo={todo} />)
        }
    </ul>
  );
};

export default TodoMain;