import { useEffect, useState } from "react"
import Input from "../../../../Components/input"
import Button from "../../../../Components/button"
import Text from "../../../../Components/text"
import CreateSubtasks from "../subtask/create-subtasks"
import TextArea from "../../../../Components/textarea"


const TaskCard = ({ 
	task,
	setTaskList,
	setShowAddTaskButton }) => {

	const [editMode, setEditMode] = useState(false) /* Used to check if task card is clicked */
	const [editTask, setEditTask] = useState(false) /* Used to check if task is clicked */
	const [editDescription, setEditDescription] = useState(false) /* Used to check if description is clicked */
	const [showCreateSubtasks, setShowCreateSubtasks] = useState(false) /*  */
	const [renamedTask, setRenamedTask] = useState({
    id: null,
    value: '',
		desc: '',
    completed: false
  })

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

	const renameTaskFunction = e => {
		if (editTask) {
			if (e.key === 'Escape') {
				setEditTask(false)
			} else if (e.key === 'Enter') {
				if (renamedTask.value === '') {
					setEditTask(false)
				} else {
					updateTask(task.id, renamedTask)
					setRenamedTask({
						id: null,
						value: '',
						desc: '',
						completed: false
					})
					setEditTask(false)
				}
			}
		} else if (editDescription) {
			if (e.key === 'Escape') {
				setEditDescription(false)
			} 
		}
	}

	const renameTaskFunctionClick = () => {
		if (renamedTask.desc === '') {
			setEditDescription(false)
		} else {
			updateTask(task.id, renamedTask)
			setRenamedTask({
				id: null,
				value: '',
				desc: '',
				completed: false
			})
			setEditDescription(false)
		}
	}

	const getRenamedTask = e => {
		setRenamedTask({
      id: task.id,
      value: e.target.value,
			desc: task.desc,
      completed: false
    })
	}
	
	const getRenamedDescription = e => {
		setRenamedTask({
      id: task.id,
      value: task.value,
			desc: e.target.value,
      completed: false
    })
	}
	
	const updateTask = (taskID, newTask) => { 
    /* Checks if element.id is equal to subtask.id then get renamedSubtask*/
    setTaskList(taskList => taskList.map(element => 
      (element.id === taskID ? newTask : element)))
	}

	return (
		<div className="flex flex-col h-auto bg-slate-700 px-4 py-2 mb-4">
			<div className={`cursor-${cursorType}`} onClick={hideAddTaskButton}>
				<div className="flex flex-col">
						{editTask 
						? <Input
								className="my-1 placeholder:text-lg"
								name="Edit Task"
								defaultValue={task.value}
								type="text"
								placeholder={task.value}
								onChange={getRenamedTask}
								onKeyDown={renameTaskFunction}
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
									onKeyDown={renameTaskFunction}
									required={true}
									/>
									<Button
										className="flex justify-center text-red-700 bg-slate-100"
										value="Update"
										onClick={renameTaskFunctionClick}
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