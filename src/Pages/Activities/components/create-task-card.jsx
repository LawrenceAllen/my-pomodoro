import { useState } from "react"
import Input from "../../../Components/input"
import Button from "../../../Components/button"
import TextArea from "../../../Components/textarea"
import CreateSubtasks from "./subtask/create-subtasks"

const CreateTaskCard = ({ showCreateTaskCard, onClose }) => {
  const [taskTitle, setTaskTitle] = useState("")
  const [shortDescription, setShortDescription] = useState()

  if (!showCreateTaskCard) {
    return null
  }

  return (
    <div className="flex flex-col bg-slate-700 px-3 py-2">
        <div className="flex flex-col content-center w-full">
          <Input 
            className="my-1 placeholder:text-lg"
            value={taskTitle}
            name="Task Title" 
            type="text" 
            placeholder="Task Name"
          />
          <TextArea 
            className="my-1"
            value={shortDescription}
            name="Short Description" 
            placeholder="Short Description" 
          />
        </div>
        <CreateSubtasks />
      <Button
        className="my-1 bg-red-500 text-white"
        onClick={onClose}
        value="CANCEL"
      />
      <Button
        className="my-1 bg-green-500 text-white"
        onClick={onClose}
        value="SAVE"
      />
    </div>
  );
};

export default CreateTaskCard
