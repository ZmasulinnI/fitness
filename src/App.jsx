import './App.css'
import CalendarList from './Components/Header/CalendarList/CalendarList'
import MainHeader from './Components/Header/MainHeader/MainHeader'
import WorkoutList from './Components/WorkoutList/WorkoutList'

function App() {


  return (
    <div className='app'>
      <MainHeader></MainHeader>
      <CalendarList></CalendarList>
      <WorkoutList></WorkoutList>
    </div>
  )
}

export default App
