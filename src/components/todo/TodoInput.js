import React from 'react'
import { MdAdd } from 'react-icons/md'
import './css/TodoInput.css'

// 버튼을 처음에 보임
// 입력창은 조건에 따라 보이도록

const TodoInput = () => {
  return (
    <>
        <div className="todo-input">
          <form className="insert-form">
                <input 
                    type="text"
                   placeholder="할 일을 입력 후, 엔터를 누르세요!"
                  autoFocus
                 />
         </form>
         </div>
         <button className="begin-btn">
             <MdAdd />
         </button>
    </>
    
  )
}

export default TodoInput