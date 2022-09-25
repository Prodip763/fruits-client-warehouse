import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/shared/Header/Header';
import Footer from './Component/shared/Footer/Footer';
import Home from './Component/page/Home/Home';
import Blog from './Component/page/Blog/Blog';
import ServiceDetails from './Component/service/ServiceDetails/ServiceDetails';
import ServiceDetail from './Component/service/ServiceDetail/ServiceDetail';
import NotFound from './Component/shared/NotFound/NotFound';
import Login from './Component/Login/Login/Login';
import Register from './Component/Login/Register/Register';
import RequireAuth from './Component/shared/RequireAuth/RequireAuth';
import AddService from './Component/service/AddService/AddService'
import ManageService from './Component/service/ManageService/ManageService';
import UpdateService from './Component/service/UpdateService/UpdateService';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/serviceDetails' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/service/:serviceId' element={<RequireAuth><ServiceDetail></ServiceDetail></RequireAuth>}></Route>
        <Route path='/addService' element={<RequireAuth><AddService></AddService> </RequireAuth>}></Route>
        <Route path='/manageService' element={<RequireAuth><ManageService></ManageService></RequireAuth>}></Route>
        <Route path='/updateService/:id' element={<RequireAuth><UpdateService></UpdateService></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
