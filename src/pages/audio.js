// src/pages/audio_sermons.js
import React from 'react';

const AudioSermons = () => {
  // Sample sermon data, you can replace it with dynamic data later
  const sermons = [
    {
      title: 'The Power of Faith',
      speaker: 'Pastor Omongole',
      date: '2024-12-01',
      audioUrl: '/assets/audio/sermon1.mp3', // Replace with actual audio URL
    },
    {
      title: 'Walking in Grace',
      speaker: 'Pastor Omongole',
      date: '2024-12-08',
      audioUrl: '/assets/audio/sermon2.mp3', // Replace with actual audio URL
    },
    {
      title: 'Living with Purpose',
      speaker: 'Pastor Omongole',
      date: '2024-12-15',
      audioUrl: '/assets/audio/sermon3.mp3', // Replace with actual audio URL
    },
  ];

  return (
    <div className="audio-sermons">
      <h1>Audio Sermons</h1>
      <p>Listen to the latest sermons from Christos Rhema Church.</p>
      <ul>
        {sermons.map((sermon, index) => (
          <li key={index} className="sermon">
            <h2>{sermon.title}</h2>
            <p><strong>Speaker:</strong> {sermon.speaker}</p>
            <p><strong>Date:</strong> {sermon.date}</p>
            <audio controls>
              <source src={sermon.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioSermons;
