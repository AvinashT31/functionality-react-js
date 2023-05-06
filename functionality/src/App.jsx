import logo from './logo.svg';
import Homepage from './component/Homepage';
import Registration from './component/Registration';
import Login from './component/Login';
import { Routes, Route } from "react-router-dom"
import Navbar from './component/Navbar';
import Reducer from './component/Reducer';
import DecrementAge from './component/DecrementAge';
import LoginText from './component/LoginText';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={< Homepage/>} />
          <Route exact path='/registration' element={<Registration/>} />
          <Route exact path='/login' element={< Login />} />
          <Route exact path='/navbar' element={<Navbar/>} />
          <Route exact path='/reducer' element={<Reducer/>} />
          <Route exact path='/dec' element={<DecrementAge/>} />
          <Route exact path='/logintext' element={<LoginText/>} />
          </Routes>
          
    </div>
  );
}

export default App;
