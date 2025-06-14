import React, { useEffect, useState } from 'react';
import supabase from './supabase';  // Import Supabase client

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*');

      if (error) {
        console.error('Error fetching videos:', error.message);
      } else {
        setVideos(data);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <a href={video.video_url} target="_blank" rel="noopener noreferrer">
            Watch Video
          </a>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
