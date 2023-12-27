import React from 'react';
import logo from '../Images/logo.png';
import '../App.css'

export default function Footer() {
    return (
        <div className="bg-dark mb-0 footer">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="me-2 mb-md-0 text-body-secondary text-light text-decoration-none lh-1">
                        <img src={logo} alt="Logo" width="50" height="40" className="d-inline-block align-text-top pe-2" />
                    </a>
                    <span className="mb-md-0 text-body-secondary text-light">© 2023 SnippetsOnTheGo</span>
                </div>
            </footer>
        </div>
    )
}