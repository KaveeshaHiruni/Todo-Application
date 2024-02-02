import React from 'react'
import styles from './TodoItems.module.css'

export default function TodoItems({item,todos,setTodos}) {

  function handleDelete(item){
    console.log("Delete", item)
    setTodos(todos.filter((todo)=> todo != item));
  }

  function handleClick(name){
    const newArray = (todos.map((todo)=>
     todo.name === name ? {...todo,done : !todo.done}:todo)
    )
    setTodos(newArray)
  }

  const Completed = item.done ? styles.completed : ""

  return (
    <div className={styles.item}>
        <div className={styles.itemName}>
          <span className={Completed} onClick={() => handleClick(item.name)}>{item.name}</span>
          <button onClick={() => handleDelete(item)} className={styles.deleteButton}>x</button>
        </div>
        <hr className={styles.line}/>
    </div>
  )
}
