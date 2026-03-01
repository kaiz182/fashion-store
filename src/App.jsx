import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './CartContext'; // Ensure the path is correct
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
        </CartProvider>
    );
};

export default App;
