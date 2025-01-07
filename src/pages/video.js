// src/pages/video_sermons.js
import React from 'react';

const VideoSermons = () => {
  // Sample sermon data, replace with actual video links
  const sermons = [
    {
      title: 'The Power of Faith',
      speaker: 'Pastor Omongole',
      date: '2024-12-01',
      videoUrl: '/assets/videos/sermon1.mp4', // Replace with actual video URL
    },
    {
      title: 'Walking in Grace',
      speaker: 'Pastor Omongole',
      date: '2024-12-08',
      videoUrl: '/assets/videos/sermon2.mp4', // Replace with actual video URL
    },
    {
      title: 'Living with Purpose',
      speaker: 'Pastor Omongole',
      date: '2024-12-15',
      videoUrl: '/assets/videos/sermon3.mp4', // Replace with actual video URL
    },
  ];

  return (
    <div className="video-sermons">
      <h1>Video Sermons</h1>
      <p>Watch the latest sermons from Christos Rhema Church.</p>
      <ul>
        {sermons.map((sermon, index) => (
          <li key={index} className="sermon">
            <h2>{sermon.title}</h2>
            <p><strong>Speaker:</strong> {sermon.speaker}</p>
            <p><strong>Date:</strong> {sermon.date}</p>
            <video width="100%" controls>
              <source src={sermon.videoUrl} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoSermons;
