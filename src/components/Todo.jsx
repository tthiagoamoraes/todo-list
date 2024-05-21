/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from 'react'


const Todo = ({ todo }) => {
  return (
    <div>
      <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="categoria">({todo.category})</p>
            </div>
            <div>
              <button className="complete">Complentar</button>
              <button className="remove">x</button>
            </div>
          </div>
    </div>
  )
}

export default Todo
