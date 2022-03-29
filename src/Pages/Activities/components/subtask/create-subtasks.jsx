import SubtaskForm from "./subtask-form"
import Text from "../../../../Components/text"

const CreateSubtasks = ({ showCreateSubtasks, onClose }) => {

  if (!showCreateSubtasks) {
    return (
      <div className="my-4 hidden">
        <Text className="text-white text-lg" value="Subtasks" />
        <SubtaskForm />
      </div>
    )
  }
  
  return (
    <div className="my-4">
      <div className="flex">
        <Text className="text-white text-lg" value="Subtasks" />
        <Text className="ml-24 text-white text-lg cursor-pointer" value="close" onClick={onClose}/>
      </div>
      <SubtaskForm />
    </div>
  )
}

export default CreateSubtasks
