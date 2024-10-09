import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import ProductCatalog from './components/categories';
import Greeting from './components/greetings';
import Productlist from './components/products';


class App extends Component {
    state = { items: [] };

    render() {
        const { items } = this.state;

        return (
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <React.Fragment>
                            <div className="welcome-container">
                                <Greeting />
                            </div>
                        </React.Fragment>
                    } />
                    <Route path="/kategorien" element={<ProductCatalog items={items} />} />
                    <Route path="/produktliste" element={<Productlist items={items} />} />
                </Routes>
            </Router>
        );
    }
}

export default App;