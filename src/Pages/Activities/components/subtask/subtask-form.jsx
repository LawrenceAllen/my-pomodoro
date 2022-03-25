import { useState, useEffect, useCallback } from "react";
import Text from "../../../../Components/text";
import Button from "../../../../Components/button";
import Input from "../../../../Components/input";

const SubtaskForm = ({ 
  subtask, 
  setSubtask, 
  subtaskList, 
  setSubtaskList,
}) => {

  const [showInput, setShowInput] = useState(true);
  const [showSubmitButton, setShowSubmitButton] = useState(true);

  const changeHandler = (e) => {
      setSubtask(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (subtask.length === 0) {
      console.log("No Input");
    } else {
      setSubtaskList([
        ...subtaskList,
        {id: Math.random() * 10000, value: subtask, completed: false}
      ]);
      setSubtask('')
    }
  }

  return (
    <div>
      <Text className="text-white text-lg" value="Subtasks" />
      <form>
        <Input
          className="my-1 placeholder:text-md"
          value={subtask}
          name="Subtask"
          type="text"
          placeholder="Subtask Name"
          onChange={(e) => changeHandler(e)}
          visibility={showInput}
          required={true}
        />
        <Button
          className="text-slate-700 bg-slate-400"
          value="ADD"
          visibility={showSubmitButton}
          onClick={(e) => submitHandler(e)}
        />
      </form>
      {/* <Button
        className="my-2 bg-transparent text-slate-100 border border-dashed border-slate-400 border-2"
        value="Add Subtask"
        onClick={() => {setShowInput(true); setShowSubmitButton(true)}}
        visibility={true}
      /> */}
    </div>
  )
}

export default SubtaskForm;