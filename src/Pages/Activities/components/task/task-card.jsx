import { useEffect, useState } from "react"
import Input from "../../../../Components/input"
import Button from "../../../../Components/button"
import Text from "../../../../Components/text"
import CreateSubtasks from "../subtask/create-subtasks"
import TextArea from "../../../../Components/textarea"


const TaskCard = ({ 
	task,
	taskList,
	setTaskList,
	newTask,
  setNewTask, 
	setShowAddTaskButton }) => {

	const [editMode, setEditMode] = useState(false)
	const [editTask, setEditTask] = useState(false)
	const [editDescription, setEditDescription] = useState(false)
	const [showCreateSubtasks, setShowCreateSubtasks] = useState(false)
	const [renamedTask, setRenamedTask] = useState(false)
	const [renamedDescription, setRenamedDescription] = useState(false)

	let cursorType = ""
	if (!showCreateSubtasks) {
		cursorType = "pointer"
	} else {
		cursorType = "auto"
	}

	const hideAddTaskButton = () => {
		setShowCreateSubtasks(true)
		setShowAddTaskButton("hidden")
		setEditMode(true)
	}

	const showAddTaskButton = () => {
		setShowCreateSubtasks(false)
		setShowAddTaskButton("block")
		setEditMode(false)
		setEditTask(false)
		setEditDescription(false)
	}

	const showEditTaskInput = () => {
		setEditTask(true)
		setEditDescription(false)
	}

	const showEditDescriptionInput = () => {
		setEditTask(false)
		setEditDescription(true)
	}

	const renameTaskKey = e => {
		if (e.key === 'Escape') {
			setEditTask(false)
		}
	}

	const renameDescriptionKey = e => {
		if (e.key === 'Escape') {
			setEditDescription(false)
		}
	}

	const getRenamedTask = e => {
		setRenamedTask(e.target.value)
	} 

	const getRenamedDescription = e => {
		setRenamedDescription(e.target.value)
	}
	
	const updateTask = (taskID, taskValue, descriptionValue) => { 
    /* Checks if element.id is equal to subtask.id then get renamedSubtask*/
    setTaskList(taskList => taskList.map(element => 
      (console.log(element))))
	}

	return (
		<div className="flex flex-col h-auto bg-slate-700 px-4 py-2 mb-4">
			<div className={`cursor-${cursorType}`} onClick={hideAddTaskButton}>
				<div className="flex flex-col">
						{editTask 
						? <Input
								className="my-1 placeholder:text-lg"
								name="Edit Task"
								value={task.value}
								type="text"
								placeholder={task.value}
								onKeyDown={renameTaskKey}
								required={true}
							/>
						: <div>
								{editMode 
								? <Text
										className="text-slate-100 text-xl" 
										value={task.value}
										onClick={showEditTaskInput}
									/>
								: <Text
										className="text-slate-100 text-xl" 
										value={task.value}
									/>
								}
							</div>
						}
						{editDescription 
						? <div>
							<TextArea
									className="my-1 h-28 w-full"
									name="Edit Short Description"
									defaultValue={task.desc}
									type="text"
									placeholder={task.desc}
									onChange={getRenamedDescription}
									onKeyDown={renameDescriptionKey}
									required={true}
									/>
									<Button
										className="flex justify-center text-red-700 bg-slate-100"
										value="Update"
									/>	
							</div>

						: <div>
								{editMode 
								? <Text
										className="text-slate-100 text-xl" 
										value={task.desc}
										onClick={showEditDescriptionInput}
									/>
								: <Text
										className="text-slate-100 text-xl" 
										value={task.desc}
									/>
								}
							</div>
						}
				</div>
			</div>
			<CreateSubtasks 
				showCreateSubtasks={showCreateSubtasks}
				onClose={showAddTaskButton}
			/>
		</div>
	)
}

export default TaskCard