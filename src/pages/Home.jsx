import React from 'react';


function Home() {
  return (
    <div className="home-container">
      <h2 className="welcome-header">Welcome</h2>
      <h3 className="subtitle">To the Postr App!</h3>
      <p className="description">Using our Postr Social Media, you will be able to:</p>
      <ul className="feature-list">
        <li className="feature-item">Make a Post with whatever unique content you desire</li>
        <li className="feature-item">Comment on an existing Post</li>
        <li className="feature-item">Edit an Existing Post</li>
      </ul>
      <p className="description">We do hope you enjoy our Postr app, and please tell your friends and spread the word!</p>
    </div>
  );
}

export default Home;