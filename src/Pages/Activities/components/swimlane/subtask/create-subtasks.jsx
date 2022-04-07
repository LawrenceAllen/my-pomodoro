import SubtaskForm from "./subtask-form"
import Text from "../../../../../Components/text"
import { VscChevronUp } from "react-icons/vsc"
import { VscChevronDown } from "react-icons/vsc"

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
      <div className="flex justify-between items-center">
        <Text className="text-white text-lg" value="Subtasks" />
        <VscChevronUp 
          className="fill-slate-50 m-1 cursor-pointer" 
          size={30}
          onClick={onClose}
        />
      </div>
      <SubtaskForm />
    </div>
  )
}

export default CreateSubtasks
