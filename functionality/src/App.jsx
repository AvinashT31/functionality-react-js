import logo from './logo.svg';
import Homepage from './component/Homepage';
import Registration from './component/Registration';
import Login from './component/Login';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={< Homepage/>} />
          <Route exact path='/registration' element={<Registration/>} />
          <Route exact path='/login' element={< Login />} />
          </Routes>
          
    </div>
  );
}

export default App;
