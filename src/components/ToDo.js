import React from 'react';

function ToDo({todo, removeTask, handleToogle}) {

    return (
        <div className="item-todo" key={todo.id}>
            <div className={todo.done ? 'item-text strike' : 'item-text'} onClick={() => handleToogle(todo.id)}>
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                x
            </div>
        </div>
    )
}

export default ToDo