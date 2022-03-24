import { useState } from "react";
import Input from "../../../Components/input";
import Button from "../../../Components/button";
import TextArea from "../../../Components/textarea";

const CreateTaskCard = ({ showCreateTaskCard, onClose }) => {
  const [taskName, setTaskName] = useState("Task Name");
  const [shortDescription, setShortDescription] = useState(
    "This is a task card that will consist of different subtasks"
  );

  if (!showCreateTaskCard) {
    return null;
  }

  return (
    <div className="flex flex-col items-center bg-slate-700 px-4 py-2">
      <div className="flex flex-col content-center self-center w-full">
        <Input 
					className="my-1 placeholder:text-lg" 
					type="text" 
					placeholder="Task Name" 
				/>
        <TextArea 
					className="my-1" 
					placeholder="Short Description" 
				/>
      </div>
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

export default CreateTaskCard;
