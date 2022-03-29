import { useState } from "react"
import SubtaskForm from "./subtask-form"

const CreateSubtasks = ({ showCreateSubtasks }) => {

  if (!showCreateSubtasks) {
    return null
  }
  
  return (
    <div className="my-4">
      <SubtaskForm />
    </div>
  );
};

export default CreateSubtasks
