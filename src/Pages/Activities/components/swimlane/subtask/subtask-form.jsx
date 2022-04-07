import { useState } from "react"
import Button from "../../../../../Components/button"
import Input from "../../../../../Components/input"
import SubtaskList from "./subtask-list"
import { VscAdd } from "react-icons/vsc"

const SubtaskForm = () => {
  const [subtask, setSubtask] = useState("")
  const [subtaskList, setSubtaskList] = useState([])
  console.log(subtaskList)
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
          className="cursor-pointer flex justify-center bg-slate-500 hover:bg-slate-600 rounded mt-1" 
          onClick={submitHandler}
          value=
          {<VscAdd
            className="fill-white py-1" 
            size={32}
          />}
        >
        </Button>
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