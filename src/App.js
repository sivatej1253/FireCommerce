import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import ProductInfoPage from './pages/ProductInfo';

import './stylesheets/layout.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/login' exact element={<LoginPage/>} />
          <Route path='/register' exact element={<RegisterPage/>} />
          <Route path='/productinfo' exact element={<ProductInfoPage/>} />
          <Route path='/cart' exact element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
