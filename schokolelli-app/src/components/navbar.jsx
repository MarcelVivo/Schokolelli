import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {
        
    };

    handleButtonClick = (buttonName) => {
        console.log(`${buttonName} Button clicked`);
    };

    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-light p-2">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" ><img src="/img/logo.jpg" alt="Bootstrap" width="30" height="24"></img></Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/kategorien" onClick={() => this.handleButtonClick('Kategorien')} > Auswahl </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/produktliste" onClick={() => this.handleButtonClick('Produktliste')} > Produkte </Link>
                            </li>
                        </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;