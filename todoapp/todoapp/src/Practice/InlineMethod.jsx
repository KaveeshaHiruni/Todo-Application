import React from 'react'
import '../css/style.css'
import styles from './InlineMethod.module.css'

const header = {color : "blue", fontSize : "140 px"}

export default function InlineMethod() {
  return (
    <div>
        <h1 style={{color : "blue", fontSize : "80 px"}}>Inline Component</h1>
        <h2 style={header}>I Love Canada!!</h2>
        <h3 className= {styles.header}>I love States!!</h3>
    </div>
  )
}
