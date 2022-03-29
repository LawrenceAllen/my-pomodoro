import { useState } from "react"
import Text from "../../../../Components/text"
import Button from "../../../../Components/button"
import TaskInfo from "./task-info"


const TaskCard = ({ showTaskCard, onClose }) => {
	const [taskTitle, setTaskTitle] = useState("Task Title")
	const [shortDescription, setShortDescription] = useState("This is a task card that will consist of different subtasks")

	if (!showTaskCard) {
			return null
	}

	return (
		<div className="flex flex-col h-auto bg-slate-700 px-4 py-2">
			<div className="flex flex-col content-center w-full m-0">
					<Text
						className="text-slate-100 text-xl" 
						value={taskTitle}
					/>
					<TaskInfo
						shortDescription={shortDescription}
					/>
			</div>
		</div>
	)
}

export default TaskCard