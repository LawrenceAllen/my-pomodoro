import { useState } from "react"
import SubtaskForm from "./subtask-form"

const CreateSubtasks = () => {
  const [subtask, setSubtask] = useState("")
  const [subtaskList, setSubtaskList] = useState([])
  console.log(subtaskList)
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
