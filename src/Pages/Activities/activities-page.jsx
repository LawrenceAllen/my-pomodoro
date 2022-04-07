import Swimlanes from "./components/swimlane/swimlanes"
import Sidebar from "./components/bar/sidebar"

const ActivitiesPage = () => {
  
  return (
    <div className='flex'>
      <Sidebar />
      <Swimlanes />
    </div>
  )
}

export default ActivitiesPage
