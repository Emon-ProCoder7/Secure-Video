import React, { useState } from 'react';

function VideoPlayer({ video }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === video.password) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  if (isAuthenticated) {
    return (
      <div>
        <h3>{video.title}</h3>
        <video controls>
          <source src={video.video_url} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <form onSubmit={handlePasswordSubmit}>
      <div>
        <label>Enter Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default VideoPlayer;
