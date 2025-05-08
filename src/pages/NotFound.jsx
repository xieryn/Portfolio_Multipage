import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="not-found">
            <div className="not-found-container">
                <h1 className="not-found-heading">404</h1>
                <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="go-home-link">
                    Go to Homepage
                </Link>
            </div>
        </section>
    );
}

export default NotFound;
