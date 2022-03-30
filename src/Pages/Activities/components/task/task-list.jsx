import TaskCard from './task-card'

const TaskList = ({
  taskList,
  setTaskList,
  newTask,
  setNewTask,
  setShowAddTaskButton,
}) => {
  return (
    <div>
      {taskList.map((task) => {
        return <TaskCard 
          task={task}
          key={task.id}
          taskList={taskList}
          setTaskList={setTaskList}
          newTask={newTask}
          setNewTask={setNewTask}
          setShowAddTaskButton={setShowAddTaskButton}
        />
      })}
    </div>
  )

}

export default TaskList