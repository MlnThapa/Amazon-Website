import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';  
import RegisterScreen from './screens/RegisterScreen.jsx';
import Categories from './screens/Categories.jsx';
import SingleProduct from './screens/SingleProduct.jsx';
import Cart from './screens/Cart.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import store from './store/store';
import {Provider} from 'react-redux';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />}/>
      <Route path="/register" element={<RegisterScreen />}/>
      <Route path="/category" element={<Categories />}/>
      <Route path='/singleProduct/:id' element={<SingleProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
