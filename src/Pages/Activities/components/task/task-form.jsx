import React from 'react'
import Input from "../../../../Components/input"
import TextArea from "../../../../Components/textarea"
import Button from "../../../../Components/button"

const TaskForm = ({
  task,
  setTask,
  taskList,
  setTaskList,
  shortDescription,
  setShortDescription,
  setShowCreateTask,
}) => {

  const changeHandlerTask = e => {
    /* Adds a Task */
    setTask(e.target.value)
  }

  const changeHandlerDescription = e => {
    /* Adds a Description */
    setShortDescription(e.target.value)
  }

  const submitHandler = e => {
    /* Adds a Task Object on taskList */
    e.preventDefault();
    if (task.length === 0 || shortDescription.length === 0) {
      console.log("No input")
    } else {
      setTaskList([
        ...taskList,
        {id: Math.random() * 10000, value: task, desc: shortDescription, completed: false}
      ])
      setTask('')
      setShortDescription('')
      setShowCreateTask(false)
    }
  }

  return (
    <div>
      <form className="flex flex-col content-center w-full">
        <Input 
          className="my-1 placeholder:text-lg"
          value={task}
          name="Task" 
          type="text" 
          placeholder="Task Name"
          onChange={changeHandlerTask}
          required={true}
        />
        <TextArea 
          className="my-1 h-28"
          content={shortDescription}
          name="Short Description" 
          placeholder="Short Description" 
          onChange={changeHandlerDescription}
        />
        <Button
          className="my-1 bg-red-500 text-white"
          onClick={() => setShowCreateTask(false)}
          value="CANCEL"
        />
        <Button
          className="my-1 bg-green-500 text-white"
          onClick={submitHandler}
          value="SAVE"
        />
      </form>
    </div>
  )
}

export default TaskForm