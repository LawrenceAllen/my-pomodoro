import { useState } from 'react'
import TaskList from '../task/task-list'
import TaskForm from '../task/task-form'
import Button from "../../../../Components/button"

const TodoSwimlane = () => {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])
  const [description, setDescription] = useState("")

  const [showCreateTask, setShowCreateTask] = useState(false)
  const [showAddTaskButton, setShowAddTaskButton] = useState("block")

  const hideAddTaskButton = () => {
    setShowCreateTask(true)
    setShowAddTaskButton("hidden")
  }
  return (
    <div className='flex flex-col ml-24 w-64 border border-red-400'>
      <div className='flex flex-col content-center w-64'>
        <TaskForm 
          task={task}
          setTask={setTask}
          taskList={taskList}
          setTaskList={setTaskList}
          description={description}
          setDescription={setDescription}
          showCreateTask={showCreateTask}
          setShowCreateTask={setShowCreateTask}
          setShowAddTaskButton={setShowAddTaskButton}
        />
      </div>
      <Button 
        className={`${showAddTaskButton} my-4 bg-transparent text-slate-600 border border-dashed border-slate-400 border-2`}
        onClick={hideAddTaskButton} 
        value="Add Task"
      />
      <TaskList 
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  )
}

export default TodoSwimlane