import React, { useState } from 'react'
import styles from './Form.module.css'

export default function Form({todos,setTodos}) {

    const[todo,setTodo] = useState({name : "" , done : false}) 
  
    function addTask(e){
      e.preventDefault();
      setTodos([...todos, todo])
      setTodo({name : "" , done : false})
    }

  return (
    <form className={styles.taskForm} onSubmit={addTask}>
        <div className={styles.inputContainer}>
            <input className={styles.modernInput}
            type="text" 
            placeholder='Add a task..' 
            value={todo.name}
            onChange={(e) =>{
                setTodo({name : e.target.value, done : false})
            }} />
            <button className={styles.modernButton}>Add</button>
        </div>
    </form>
  )
}
