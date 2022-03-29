import Subtask from "./subtask"

const SubtaskList = ({ 
  subtaskList, 
  setSubtaskList,
  renamedSubtask,
  setRenamedSubtask,
}) => {

  return (
    <ul>
      {subtaskList.map((subtask) => {
      return <Subtask 
        value={subtask.value}
        key={subtask.id}
        isCompleted={subtask.complete}
        subtask={subtask}
        subtaskList={subtaskList}
        setSubtaskList={setSubtaskList}
        renamedSubtask={renamedSubtask}
        setRenamedSubtask={setRenamedSubtask}
        />
      })}
    </ul>
  )
}

export default SubtaskList