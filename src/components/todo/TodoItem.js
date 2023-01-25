import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import './css/TodoItem.css';
import cn from "classnames"

const TodoItem = ({ todo, remove }) => {

  const {id, title, done} = todo;  

  // 서버에 삭제요청 클릭 이벤트핸들러
  const deleteClickHandler = e => {
    remove(id);
  };

  // 할 일 완료 수정 처리 이벤트핸들러
  const doneCheckHandler = e => {
    // 서버쪽으로 현재 done값의 반대 논리값을 전달

    // id, title, done 다 todoTemplate에게 전달
  };

  return (
    <li className="todo-item">
        <div className={cn('check-circle', {active: done})}
        onClick={doneCheckHandler}
        >
            {done && <MdDone />}
        </div>
        <span className={cn('text', {finish: done})}>{title}</span>
        <div className="remove" onClick={deleteClickHandler}>
            <MdDelete />
        </div>
    </li>
  );
};

export default TodoItem;