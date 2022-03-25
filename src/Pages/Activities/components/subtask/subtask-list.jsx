import Subtask from "./subtask";

const SubtaskList = ({ subtaskList, setSubtaskList }) => {

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
      />
    })}
    </ul>
  )
}

export default SubtaskList;