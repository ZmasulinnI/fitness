import { useState } from 'react';
import './App.css'
import Header from './Components/Header/Header'
import WorkoutList from './Components/WorkoutList/WorkoutList'
import Footer from './Components/Footer/Footer';

function App() {
  const [date, setDate] = useState(new Date());

  
  return (
    <div className='app'>
      <Header date={date} setDate={setDate}></Header> 
      <WorkoutList></WorkoutList>
      <Footer></Footer>
    </div>
  )
}

export default App
