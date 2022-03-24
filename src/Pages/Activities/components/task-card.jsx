import { useState } from "react";
import Input from "../../../Components/input"
import Text from "../../../Components/text"


const TaskCard = () => {
    const [taskName, setTaskName] = useState("Task Name");
    const [shortDescription, setShortDescription] = useState("This is a task card that will consist of different subtasks");
    const [isAdd, setIsAdd] = useState(false);

    return (
        <div className="flex flex-col bg-slate-700 w-56 m-96 px-4 py-2">
            {isAdd 
            ?   <div className="flex flex-col">
                    <Input type="text" placeholder="Task Name"/>
                    <Input type="text" placeholder="Short Description"/>
                </div>
            :   <div className="flex flex-col">
                    <Text className="text-stone-50 text-2xl" value={taskName}/>
                    <Text className="text-stone-50 text-md" value={shortDescription}/>
                </div>
            }
            

        </div>
    )
}

export default TaskCard;