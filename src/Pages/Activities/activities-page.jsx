import { useState } from 'react'
import CreateTaskCard from './components/task/create-task-card'
import TaskCard from './components/task/task-card'
import Button from "../../Components/button"

const ActivitiesPage = () => {
  const [showTaskCard, setShowTaskCard] = useState(true)
  const [showCreateTaskCard, setShowCreateTaskCard] = useState(true)

  return (
      <div className='flex mt-10'>
        <div className='flex flex-col content-center w-64 mx-24'>
          <TaskCard 
            showTaskCard={showTaskCard}
            onClose={() => setShowTaskCard(false)}
          />
        </div>
        <br />
        <div className='flex flex-col content-center w-64 mx-24'>
          <CreateTaskCard 
            showCreateTaskCard={showCreateTaskCard}
            onClose={() => setShowCreateTaskCard(false)}
          />
          <Button 
            className="my-4 bg-transparent text-slate-600 border border-dashed border-slate-400 border-2" 
            onClick={() => setShowCreateTaskCard(true)} 
            value="Add Task"
          />
        </div>
      </div>
  )
}

export default ActivitiesPage
