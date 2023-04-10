import _ from 'lodash';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Analysis from '../components/Analysis';
import Summery from '../components/Summery';
import useAnswers from '../hooks/useAnswers';

function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { state: qna } = location;

  const { loading, error, answers } = useAnswers(id);

  const calculate = () => {
    let score = 0;

    answers.forEach((question, index1) => {
      let checkedIndexes = [];
      let correctIndexes = [];
      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(checkedIndexes, correctIndexes)) {
        score = score + 5;
      }
    });

    return score;
  };

  const userScore = calculate();

  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>There was an error!</p>}
      {answers && answers.length > 0 && (
        <>
          <Summery score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </React.Fragment>
  );
}

export default Result;
