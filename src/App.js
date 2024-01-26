import React, { useState } from "react";

const TodoApp = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [editedTask, setEditedTask] = useState("")
    const [editIndex, setEditIndex] = useState(-1)

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask])
            setNewTask("")
        }
    }

    const OnClickHandler = (index) => {
        setEditIndex(index)
        setEditedTask(tasks[index])
        setIsEditing(true)
    }

    const handleEditChange = (e) => {
        setEditedTask(e.target.value)
    }

    const handleEditSubmit = () => {
        if (editedTask.trim() !== "") {
            const updatedTasks = [...tasks]
            updatedTasks[editIndex] = editedTask
            setTasks(updatedTasks)
            setEditIndex(-1)
            setEditedTask("")
        }
    }

    return (
        <>
            <div style={{ width: 500, margin: "0px auto", marginTop: 100 }}>
                <div>
                    <span>Туду-лист</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <input
                        placeholder="Do....."
                        style={{ width: 425, height: 30 }}
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button onClick={addTask}>Create</button>
                </div>

                <div>
                    <ol style={{padding: 0}}>
                        {tasks.map((task, index) => (
                            <li key={index} style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: 5}}>
                                {isEditing && editIndex === index ? (
                                    <input
                                        value={editedTask}
                                        onChange={handleEditChange}
                                        onBlur={handleEditSubmit}
                                        autoFocus
                                    />
                                ) : (
                                    <>
                                        <span onClick={() => OnClickHandler(index)}>{task}</span>
                                        <button style={{width: 100, height: 30}} onClick={() => setTasks(tasks.filter((_, i) => i !== index))}>Delete</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoApp
