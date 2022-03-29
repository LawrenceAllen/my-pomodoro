import React from 'react'
import Text from "../../../../Components/text"
import CreateSubtasks from '../subtask/create-subtasks'

const TaskInfo = ({
  shortDescription
}) => {
  
  return (
    <div>
      <Text
        className="text-slate-200" 
        value={shortDescription}
      />
      <CreateSubtasks />
    </div>
  )
}

export default TaskInfo