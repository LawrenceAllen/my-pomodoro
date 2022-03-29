import TaskCard from './task-card'

const TaskList = ({
  taskList,
  setTaskList,
}) => {
  return (
    <div>
      {taskList.map((task) => {
        return <TaskCard 
          task={task}
          key={task.id}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      })}
    </div>
  )

}

export default TaskList