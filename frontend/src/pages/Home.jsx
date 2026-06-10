import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Led from './led'
import Maintenance from './Maintenance'
import QuickHelp from './QuickHelp'

 function Home() {
  return (
<>

<Routes>

<Route path= "/services/led" element= {<Led/>}/>
<Route path= "/services/maintenance" element= {<Maintenance/>}/>
<Route path= "/services/quick-help" element= {<QuickHelp/>}/>




</Routes>


</>



  )
}
export default Home