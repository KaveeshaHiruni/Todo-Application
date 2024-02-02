import React from 'react'
import styles from './Footer.module.css'

export default function Footer({todoCount, totalTodo}) {
  return (
    <div className={styles.footer}>
        <span className={styles.item}>Completed Todos : {todoCount}</span>
        <span className={styles.item}>Total Todos : {totalTodo}</span>
    </div>
  )
}
