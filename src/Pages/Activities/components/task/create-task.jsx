import { useState } from "react"
import TaskForm from "./task-form"

const CreateTaskCard = ({
  task,
  setTask,
  taskList,
  setTaskList,
  shortDescription,
  setShortDescription,
  showCreateTask,
  setShowCreateTask, 
  onClose 
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
        shortDescription={shortDescription}
        setShortDescription={setShortDescription}
        setShowCreateTask={setShowCreateTask}
        onClose={onClose}
      />
    </div>
  );
};

export default CreateTaskCard
