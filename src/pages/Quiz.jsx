import React from 'react';
import Answers from '../components/Answers';
import MiniPlayer from '../components/MiniPlayer';
import ProgressBar from '../components/ProgressBar';

function Quiz() {
  return (
    <React.Fragment>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </React.Fragment>
  );
}

export default Quiz;
