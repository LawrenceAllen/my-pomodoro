import { Calendar } from 'react-calendar'
import Button from '../../../../Components/button'
import Text from '../../../../Components/text'
import 'react-calendar/dist/Calendar.css'

const Sidebar = () => {
  return (
    <div className='w-96 h-screen px-6 bg-slate-800'>
      <Text 
        className='flex flex-col items-center justify-center text-white text-2xl h-32'
        value='Pomodoro Application'
      />
      <div className='flex flex-col items-center gap-32 h-full'>
        <Calendar 
          className='w-80 rounded'
          
        />
        <div className='flex flex-col gap-7'>
          <Button 
            className='bg-transparent text-white text-xl'
            value='General'
          />
          <Button 
            className='bg-transparent text-white text-xl'
            value='Timer'
          />
          <Button 
            className='bg-transparent text-white text-xl'
            value='Sound and Notifications'
          />
          <Button 
            className='bg-transparent text-white text-xl'
            value='Share Link'
          />
        </div>
        <Button 
          className='w-48 p-2 rounded bg-slate-400 hover:bg-slate-900 text-slate-900 hover:text-white text-md'
          value='Sign Out'
        />
      </div>
    </div>
  )
}

export default Sidebar