import Input from "../../../../Components/input"
import TextArea from "../../../../Components/textarea"
import Button from "../../../../Components/button"

const TaskForm = ({
  task,
  setTask,
  taskList,
  setTaskList,
  description,
  setDescription,
  setShowCreateTask,
}) => {

  const changeHandlerTask = e => {
    /* Adds a Task */
    setTask(e.target.value)
  }

  const changeHandlerDescription = e => {
    /* Adds a Description */
    setDescription(e.target.value)
  }

  const submitHandler = e => {
    /* Adds a Task Object on taskList */
    e.preventDefault()
    if (task.length === 0 || description.length === 0) {
      console.log("No input")
    } else {
      setTaskList([
        ...taskList,
        {id: Math.random() * 10000, value: task, desc: description, completed: false}
      ])
      setTask('')
      setDescription('')
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
          defaultValue={description}
          name="Description" 
          placeholder="Description" 
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