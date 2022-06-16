import React from 'react';
import {useState} from 'react'

function ToDoIn({addTask}) {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(input)
        setInput("")
    }


    const handleKeyPress = (e) => {
        if (e.key === 'Enter' ) {
            handleSubmit(e)
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='write your todos'
            />
            <button onClick={handleSubmit}>add to do</button>
        </form>
    )
}

export default ToDoIn