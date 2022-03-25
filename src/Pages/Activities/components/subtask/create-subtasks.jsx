import { useState, useCallback } from "react";
import SubtaskForm from "./subtask-form";
import SubtaskList from "./subtask-list";

const CreateSubtasks = () => {
  const [subtask, setSubtask] = useState("");
  const [subtaskList, setSubtaskList] = useState([]);
  return (
    <div className="mb-24">
      <SubtaskForm
        subtask={subtask}
        setSubtask={setSubtask}
        subtaskList={subtaskList}
        setSubtaskList={setSubtaskList}
      />
      <SubtaskList 
        subtaskList={subtaskList} 
        setSubtaskList={setSubtaskList}
      />
    </div>
  );
};

export default CreateSubtasks;
