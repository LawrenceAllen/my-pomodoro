import { useState } from "react"
import Input from "../../../../Components/input"
import Button from "../../../../Components/button"
import Text from "../../../../Components/text"
import CreateSubtasks from "../subtask/create-subtasks"


const TaskCard = ({
	task,
	taskList,
	setTaskList,
}) => {

	const [editMode, setEditMode] = useState(false)
	const [showCreateSubtasks, setShowCreateSubtasks] = useState(false)

	const toggleShowCreateSubtasks = () => {
		if (!showCreateSubtasks) {
			setShowCreateSubtasks(true)
		} else {
			setShowCreateSubtasks(false)
		}
	}

	return (
		<div className="flex flex-col h-auto bg-slate-700 px-4 py-2 border border-red-400">
			<div onClick={toggleShowCreateSubtasks}>
				{editMode
				? <div className="flex flex-col">
						<Input
							className="placeholder:text-md"
							name="Edit Task"
							value={task.value}
							type="text"
							placeholder={task.value}
							required={true}
						/>
						<Input
							className="placeholder:text-md"
							name="Edit Short Description"
							value={task.desc}
							type="text"
							placeholder={task.desc}
							required={true}
						/>
						<Button
							className="flex justify-center text-red-700 bg-slate-100"
							value="Update"
						/>
					</div>
				: <div className="flex flex-col">
						<Text
							className="text-slate-100 text-xl" 
							value={task.value}
						/>
						<Text
							className="text-slate-200" 
							value={task.desc}
						/>
					</div>
				}
			</div>
			<CreateSubtasks 
				showCreateSubtasks={showCreateSubtasks}
			/>
		</div>
	)
}

export default TaskCard