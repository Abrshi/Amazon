import React from 'react';
import FouroO4 from './FouroO4.module.css';

const NotFoundPage = () => {
  return (
    <div className={FouroO4.notfound}>
      <main className={FouroO4.notfound__content}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/" className={FouroO4.notfound__homeButton}>Go to Home Page</a>
      </main>
    </div>
  );
};

export default NotFoundPage;
