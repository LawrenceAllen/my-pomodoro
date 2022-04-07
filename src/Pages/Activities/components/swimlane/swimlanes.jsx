import { useState } from 'react'
import TaskForm from './task/task-form'
import TaskCard from './task/task-card'
import Button from "../../../../Components/button"

const Swimlanes = () => {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      value: 'Todo Task',
      desc: 'Todo Description',
      completed: false,
      doing: false
    },
    {
      id: 2,
      value: 'Doing Task',
      desc: 'Doing Description',
      completed: false,
      doing: true
    },
    {
      id: 21,
      value: 'Doing Task',
      desc: 'Doing Description',
      completed: false,
      doing: true
    },
    {
      id: 31,
      value: 'Completed Task',
      desc: 'Completed Description',
      completed: true,
      doing: false
    },
    {
      id: 3,
      value: 'Completed Task',
      desc: 'Completed Description',
      completed: true,
      doing: false
    },
    
  ])
  const [description, setDescription] = useState("")
  const [newTask, setNewTask] = useState({
    id: null,
    value: '',
    desc: '',
    completed: false,
    doing: false
  })
  console.log(taskList)

  const [showCreateTask, setShowCreateTask] = useState(false)
  const [showAddTaskButton, setShowAddTaskButton] = useState("block")

  const hideAddTaskButton = () => {
    setShowCreateTask(true)
    setShowAddTaskButton("hidden")
  }
  return (
    <div className='flex gap-32'>
      <div className='flex flex-col ml-24 w-72'>
        {taskList.map((task) => {
          if (task.completed === false && task.doing === false) {
            return <TaskCard 
              task={task}
              key={task.id}
              taskList={taskList}
              setTaskList={setTaskList}
              setShowAddTaskButton={setShowAddTaskButton}
            />
          }})
        }
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
        <Button 
          className={`${showAddTaskButton} my-4 bg-transparent text-slate-600 border border-dashed border-slate-400 border-2`}
          onClick={hideAddTaskButton} 
          value="Add Task"
        />
      </div>
      <div className='w-72'>
        {taskList.map((task) => {
          if (task.completed === false && task.doing === true) {
            return <TaskCard 
              task={task}
              key={task.id}
              taskList={taskList}
              setTaskList={setTaskList}
              setShowAddTaskButton={setShowAddTaskButton}
            />
          }})
        }
      </div>
      <div className='w-72'>
        {taskList.map((task) => {
          if (task.completed === true && task.doing === false) {
            return <TaskCard 
              task={task}
              key={task.id}
              taskList={taskList}
              setTaskList={setTaskList}
              setShowAddTaskButton={setShowAddTaskButton}
            />
          }})
        }
      </div>
    </div>
  )
}

export default Swimlanes