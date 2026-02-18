import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login'
import './App.css'
import HomeDisplay from './Components/HomeDisplay/HomeDisplay'
import AboutGYM from './Components/AboutGYM/AboutGYM'
import Exercise from './Components/Exercise/Exercise'
import Chest from './Components/Chest/Chest'
import Back from './Components/Back/Back'
import Shoulder from './Components/Shoulder/Shoulder'
import Bicep from './Components/Bicep/Bicep'
import Tricep from './Components/Tricep/Tricep'
import Leg from './Components/Leg/Leg'
import Abs from './Components/Abs/Abs'
import Trainer from './Components/Trainers/Trainer'
import Contact from './Components/Contact-us/Contact'
import Location from './Components/Location/Location'
import Joinpage from './Components/Join/Joinpage'
import Cont from './Components/Contact2/cont'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import OnlineSession from './Components/OnlineSession/OnlineSession'
import AdminContact from './Components/Admin/AdminContact'
import AdminJoin from './Components/Admin/AdminJoin'
import AdminSessions from './Components/Admin/AdminSession'

const App = () => {
  return (
    <>
    {/* <div>
      <Routes>
          <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div> */}
    <div>
      {/* <Login/>
      <Home/> */}
      <Routes>
        <Route path='/Online' element={<OnlineSession/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/join' element={<Joinpage/>}/>
        <Route path='/cbr' element={<Cont/>}/>
        <Route path='/' element={<HomeDisplay/>}/>
        <Route path='/aboutgym' element={<AboutGYM/>}/>
        <Route path='exercise' element={<Exercise/>}/>
        <Route path='chest' element={<Chest/>}/>
        <Route path='/back' element={<Back/>}/>
        <Route path='/shoulder' element={<Shoulder/>}/>
        <Route path='/bicep' element={<Bicep/>}/>
        <Route path='/tricep' element={<Tricep/>}/>
        <Route path='/abs' element={<Abs/>}/>
        <Route path='/leg' element={<Leg/>}/>
        <Route path='trainers' element={<Trainer/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path="/admin/join" element={<AdminJoin />} />
        <Route path="/admin/sessions" element={<AdminSessions />} />
        <Route path="/admin/contact" element={<AdminContact />} />
      </Routes>
     </div>


  </>
  )
}

export default App
