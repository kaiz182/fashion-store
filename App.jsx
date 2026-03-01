import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import './index.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home setCurrentPage={setCurrentPage} />;
            case 'products':
                return <Products />;
            case 'cart':
                return <Cart setCurrentPage={setCurrentPage} />;
            case 'checkout':
                return <Checkout setCurrentPage={setCurrentPage} />;
            case 'login':
                return <Login setCurrentPage={setCurrentPage} />;
            case 'register':
                return <Register setCurrentPage={setCurrentPage} />;
            default:
                return <Home setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <CartProvider>
            <Navbar setCurrentPage={setCurrentPage} />
            {renderPage()}
        </CartProvider>
    );
}

export default App;