import React from 'react'
import  {Route, Routes} from 'react-router-dom';
import Register from './layout/Register';
import Login from './layout/Login'
const App = () => {
  return (
   <>
     <div>something</div>
    <Routes>
    
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
   </>
  )
}

export default App