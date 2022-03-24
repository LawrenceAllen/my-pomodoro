import { useState } from 'react';
import CreateTaskCard from './components/create-task-card'
import Button from "../../Components/button"

const ActivitiesPage = () => {
  const [showCreateTaskCard, setShowCreateTaskCard] = useState(false);

  return (
      <>
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
        
      </>
  )
}

export default ActivitiesPage;
