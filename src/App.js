
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './assert/LoginSignUp.css'
import HomeFile from './component/HomeFile'
import SigIn from './component/Header/SignIn.jsx';
import SignUp from './component/Header/SignUp.jsx';
import ForgetPassword from './component/Header/ForgetPassword.jsx';
import PopularCard from './component/CardsFolder/PopularCard.jsx';
import Review from './component/CardsFolder/Review.jsx';
import About from './component/Header/About.jsx';

function App() {
  
  return (
    <div className="App"> 
    <Routes>
     <Route path="/" element={<SignUp />} />
   <Route path="/signin" element={<SigIn />} />
   <Route path='/Home' element={< HomeFile/>}></Route>
   <Route path='/forget' element={<ForgetPassword  />} />
   <Route path='/about' element={<About  />} />
   <Route path='/:type' element={<PopularCard />}></Route>
   <Route path='/rev/:type/:id' element={<Review />}></Route>
   </Routes> 
    </div>
  );
}

export default App;
