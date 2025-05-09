import React from 'react';

function WelcomeGreet({page, user}) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800">
        {page ? page : 'Dashboard'}
      </h1>
      <p className="text-gray-600">
        Welcome back, {user}! Here's what's happening today.
      </p>
    </div>
  );
}

export default WelcomeGreet;
