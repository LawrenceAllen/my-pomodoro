import SubtaskForm from "./subtask-form"

const CreateSubtasks = ({ showCreateSubtasks }) => {

  if (!showCreateSubtasks) {
    return (
      <div className="my-4 hidden">
        <SubtaskForm />
      </div>
    )
  }
  
  return (
    <div className="my-4">
      <SubtaskForm />
    </div>
  )
}

export default CreateSubtasks
