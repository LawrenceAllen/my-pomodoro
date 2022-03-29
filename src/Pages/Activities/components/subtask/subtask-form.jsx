import { useState } from "react"
import Text from "../../../../Components/text"
import Button from "../../../../Components/button"
import Input from "../../../../Components/input"
import SubtaskList from "./subtask-list"

const SubtaskForm = () => {
  const [subtask, setSubtask] = useState("")
  const [subtaskList, setSubtaskList] = useState([])
  const [renamedSubtask, setRenamedSubtask] = useState({
    id: null,
    value: '',
    completed: false
  })

  const changeHandler = e => {
    /* Adds a Subtask */
    setSubtask(e.target.value)
  }

  const submitHandler = e => {
    /* Adds a Subtask Object on subtaskList */
    e.preventDefault()
    if (subtask.length === 0) {
      console.log("No Input")
    } else {
      setSubtaskList([
        ...subtaskList,
        {id: Math.random() * 10000, value: subtask, completed: false}
      ])
      setSubtask('')
    }
  }

  return (
    <div>
      <Text className="text-white text-lg" value="Subtasks" />
      <form>
        <Input
          className="my-1 w-full placeholder:text-md"
          value={subtask}
          name="Subtask"
          type="text"
          placeholder="Subtask Name"
          onChange={changeHandler}
          required={true}
        />
        <Button
          className="text-slate-700 bg-slate-400"
          value="ADD"
          onClick={submitHandler}
        />
      </form>
      <SubtaskList 
        subtaskList={subtaskList} 
        setSubtaskList={setSubtaskList}
        renamedSubtask={renamedSubtask}
        setRenamedSubtask={setRenamedSubtask}
      />
    </div>
  )
}

export default SubtaskForm