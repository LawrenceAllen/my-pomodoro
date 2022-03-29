import { useState } from "react"
import Text from "../../../Components/text"
import Button from "../../../Components/button"


const TaskCard = ({ showTaskCard, onClose }) => {
    const [taskName, setTaskName] = useState("Task Name")
    const [shortDescription, setShortDescription] = useState("This is a task card that will consist of different subtasks")

    if (!showTaskCard) {
        return null
    }

    return (
        <div className="flex flex-col h-auto bg-slate-700 px-4 py-2">
            <div className="flex flex-col content-center w-full m-0">
                <Text value={taskName}/>
                <Text value={shortDescription}/>
            </div>
        </div>
    )
}

export default TaskCard