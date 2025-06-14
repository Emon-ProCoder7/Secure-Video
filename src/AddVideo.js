import React, { useState } from 'react';
import supabase from './supabase';  // Import supabase client

function AddVideo() {
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Insert the video info into Supabase
    const { data, error } = await supabase
      .from('videos')
      .insert([
        { title, video_url: videoUrl, password }
      ]);

    if (error) {
      console.error('Error adding video:', error.message);
    } else {
      console.log('Video added successfully:', data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Video Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Video URL</label>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Add Video</button>
    </form>
  );
}

export default AddVideo;
