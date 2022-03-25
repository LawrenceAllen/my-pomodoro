
const Subtask = ({ value, isCompleted, subtask, subtaskList, setSubtaskList}) => {

  const deleteHandler = () => {
    setSubtaskList(subtaskList.filter(element => element.id !== subtask.id))
  }

  const completeHandler = () => {
    //Timer Based
    setSubtaskList(subtaskList.map((item) => {
      if (item.id === subtask.id ) {
        return {...item, completed: !item.completed}
      }
      return item
    }))
  }

  const complete = "DONE"

  return (
    <div className="flex text-slate-100">
      <li className="mr-4">{subtask.completed ? complete : value}</li>
      <button onClick={() => deleteHandler()}>DELETE</button>
      <button onClick={() => completeHandler()}>COMPLETE</button>
    </div>
    
  )
}

export default Subtask;
