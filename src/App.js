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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/serviceDetails' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
