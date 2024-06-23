import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { isAuthenticated, user, error } = useSelector(state => state.auth);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.username}</p>
          <button>Log Out</button>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default UserProfile;
