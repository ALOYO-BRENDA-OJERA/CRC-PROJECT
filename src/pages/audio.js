// src/pages/audio_sermons.js
import React from 'react';
import '../styles/audio.css';  // Adjust the path if necessary

const AudioSermons = () => {
  return (
    <div className="audio-sermons">
      <h1 className="main-heading">Audio Sermons</h1>
      <div className="sub-headings">
        <h2 className="left-heading">Midweek Sermon</h2>
        <h2 className="right-heading">Sunday Sermon</h2>
      </div>

      {/* Box container with blue border */}
      <div className="sermon-box">
        <p>Here you can list the audio files for each sermon. For example:</p>
        <p><strong>Midweek Sermon:</strong> "Walking in Faith" - Pastor Omongole</p>
        <p><strong>Sunday Sermon:</strong> "Living in Grace" - Pastor Omongole</p>
      </div>
    </div>
  );
};

export default AudioSermons;
