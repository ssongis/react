import React,{useState} from 'react'
import { MdAdd } from 'react-icons/md'
import cn from 'classnames'
import './css/TodoInput.css'

// 버튼을 처음에 보임
// 입력창은 조건에 따라 보이도록

const TodoInput = () => {

  // todo-input 박스를 렌더링할지 여부
  const [open,setOpen] = useState(true);

  // todo-input 박스를 열고 닫는 클릭이벤트 헨들러
  const inputToggle = e => setOpen(!open);

  return (
    <>
        { open &&
            <div className="todo-input">
                <form className="insert-form">
                    <input 
                        type="text"
                        placeholder="할 일을 입력 후, 엔터를 누르세요!"
                        autoFocus
                    />            
                </form>
            </div>
        }
        
         <button className={cn('begin-btn', {open})} onClick={inputToggle}>
             <MdAdd />
         </button>
    </>
  )
}

export default TodoInput