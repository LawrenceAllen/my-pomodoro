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

  const deleteHandler = () => {
    /* Deletes a subtask */
    setSubtaskList(subtaskList.filter(element => element.id !== subtask.id))
  }

  const completeHandler = () => {
    /* To be used when timer is available */
    setSubtaskList(subtaskList.map((item) => {
      if (item.id === subtask.id ) {
        return {...item, completed: !item.completed}
      }
      return item
    }))
  }

  const keyPressHandler = e => {
    /* Hides edit input */
    if(e.key === 'Escape') {
      setShowEditInput(false)
    }
  }

  
  const clickSubtask = () => { 
    /* Shows the edit input of the subtask */
    setShowEditInput(true);
  }

  const editChangeHandler = e => { 
    /* Sets the edit user input to renamedSubtask */
    setRenamedSubtask({
      id: subtask.id,
      value: e.target.value,
      completed: false
    })
  }

  const updateSubtask = (subtaskID, newValue) => { 
    /* Checks if element.id is equal to subtask.id then get renamedSubtask*/
    setSubtaskList(subtaskList => subtaskList.map(element => 
      (element.id === subtaskID ? newValue : element)))
  } 
  

  const submitTask = () => {
    updateSubtask(subtask.id, renamedSubtask)
    /* Resets the value of renamedSubtask */
    setRenamedSubtask({
      id: null,
      value: '',
      completed: false
    })
  }

  return (
    <div >
      <div className="flex">
        {showEditInput
        ? <div className="flex items-center my-4">
            <Input
              className="mr-4 placeholder:text-md"
              name="Edit Subtask"
              type="text"
              placeholder={value}
              onChange={editChangeHandler}
              onKeyDown={keyPressHandler}
              required={true}
            />
            <Button
              className="flex justify-center text-red-700 bg-slate-100"
              value="Update"
              onClick={submitTask}
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
              onClick={deleteHandler}
            />
          </div>
        }
      </div>
    </div>
  )
}

export default Subtask;
