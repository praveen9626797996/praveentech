import React from 'react'
import {Route, Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Home'
import Snacks from './Snacks'
import MainSideDish from './MainSideDish'
import Location from './Location'

function App() {
  return (
    <div>
       <>
      <Home/>
      <switch>
              <Routes>
                <Route exact path='/snacks' element={<Snacks />}/>
                <Route exact path='/mainSideDish' element={<MainSideDish/>}/>
                <Route exact path='/location' element={<Location/>}/>
               </Routes>
          </switch></>
    </div>
  )
}

export default App
