import { useState } from "react"
import TaskForm from "./task-form"

const CreateTaskCard = ({
  task,
  setTask,
  taskList,
  setTaskList,
  description,
  setDescription,
  showCreateTask,
  setShowCreateTask,
}) => {

  if (!showCreateTask) {
    return null
  }

  return (
    <div className="flex flex-col bg-slate-700 px-3 py-2">
      <TaskForm 
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
        description={description}
        setDescription={setDescription}
        setShowCreateTask={setShowCreateTask}
      />
    </div>
  )
}

export default CreateTaskCard
