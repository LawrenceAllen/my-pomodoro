import { useState } from "react"
import SubtaskForm from "./subtask-form"

const CreateSubtasks = ({ showCreateSubtasks }) => {
  const [subtask, setSubtask] = useState("")
  const [subtaskList, setSubtaskList] = useState([])

  if (!showCreateSubtasks) {
    return null
  }
  
  return (
    <div className="my-4">
      <SubtaskForm
        subtask={subtask}
        setSubtask={setSubtask}
        subtaskList={subtaskList}
        setSubtaskList={setSubtaskList}
      />
    </div>
  );
};

export default CreateSubtasks
