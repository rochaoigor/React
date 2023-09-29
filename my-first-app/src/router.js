import Login from './pages/login';
import Home from './pages/home';
import Client from  './pages/clients';
import Product from './pages/products';


import {BrowserRouter, Routes, Route} from 'react-router-dom'


function Router() {
         (
            <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login/>}/>
               <Route exact  path='/' element={<Home/>}/>
               <Route path='/clientes' element={<Client/>}/>
               <Route  path='/produtos' element={<Product/>}/>
            </Routes>
            </BrowserRouter>
       )
   }

export default Router;
