import { useState, useEffect, useRef } from "react"
import Button from "../../../../Components/button"
import Input from "../../../../Components/input"

const Subtask = ({ 
  value, 
  subtask,
  subtaskList, 
  setSubtaskList,
  renamedSubtask,
  setRenamedSubtask,
}) => {

  const [showEditInput, setShowEditInput] = useState(false);

  const deleteSubtask = () => {
    /* Deletes a subtask */
    setSubtaskList(subtaskList.filter(element => element.id !== subtask.id))
  }

  const completeSubtask = () => {
    /* To be used when timer is available */
    setSubtaskList(subtaskList.map((item) => {
      if (item.id === subtask.id ) {
        return {...item, completed: !item.completed}
      }
      return item
    }))
  }

  const updateSubtask = (subtaskID, newValue) => { 
    /* Checks if element.id is equal to subtask.id then get renamedSubtask*/
    setSubtaskList(subtaskList => subtaskList.map(element => 
      (element.id === subtaskID ? newValue : element)))
  }

  const renameSubtaskClick = () => {
    /* Same as rename task but for button onClick*/
    updateSubtask(subtask.id, renamedSubtask)
    setRenamedSubtask({
      id: null,
      value: '',
      completed: false
    })
    setShowEditInput(false) 
  }

  const renameSubtaskKey = e => {
    if (e.key === 'Escape') {
      /* Hides Edit Input */
      setShowEditInput(false)
    } else if (e.key === 'Enter') {
      if (renamedSubtask.value === '') {
        setShowEditInput(false)
      } else {
        /* Overwrites the current subtask value */
        updateSubtask(subtask.id, renamedSubtask)
        /* Resets renamedSubtask */
        setRenamedSubtask({
          id: null,
          value: '',
          completed: false
        })
        /* Hides Edit Input */
        setShowEditInput(false)
      }
    }
  }

  const getEditInput = e => {
    setRenamedSubtask({
      id: subtask.id,
      value: e.target.value,
      completed: false
    })
   
  }
  
  const clickSubtask = () => { 
    /* Shows the edit input of the subtask */
    setShowEditInput(true);
  } 

  return (
    <div >
      <div className="flex">
        {showEditInput
        ? <div className="flex items-center my-4">
            <Input
              className="mr-4 placeholder:text-md"
              name="Edit Subtask"
              defaultValue={value}
              type="text"
              placeholder={value}
              onChange={getEditInput}
              onKeyDown={renameSubtaskKey}
              required={true}
            />
            <Button
              className="flex justify-center text-red-700 bg-slate-100"
              value="Update"
              onClick={renameSubtaskClick}
            />
          </div>
        
        : <div className="flex">
            <li 
              className="my-4 text-xl text-slate-100"
              key={subtask.id} 
              onClick={clickSubtask}
            >
            {value}
            </li>
            <Button
              className="flex justify-center m-4 text-red-700 bg-slate-100"
              value="remove"
              onClick={deleteSubtask}
            />
          </div>
        }
      </div>
    </div>
  )
}

export default Subtask
