import React, { useEffect, useState } from 'react'

// css 로딩
import './css/TodoTemplate.css';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';

const TodoTemplate = () => {

  const API_BASE_URL = 'http://localhost:8080/api/todos';

  // 할일 api데이터
  const [todos, setTodos] = useState([]);

  // 할 일 등록 서버 요청
  const addTodo = (todo) => {
    fetch(API_BASE_URL, {
        method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(todo) // todo를 input한테 받아와야 함
    })
    .then(res => res.json())
    .then(result => {setTodos(result.todos)});
  };

  // 렌더링되자마자 할 일 => todos api GET 목록 호출
  useEffect(() => {

    fetch(API_BASE_URL)
        .then(res => res.json())
        .then(result => {
            // console.log(result.todos);
            setTodos(result.todos);
        });

  }, []);


  return (
    <div className="todo-template">
        <TodoHeader todoList={todos} />
        <TodoMain todoList={todos} />
        <TodoInput add={addTodo}/>
    </div>
  )
}

export default TodoTemplate