import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Answers from '../components/Answers';
import MiniPlayer from '../components/MiniPlayer';
import ProgressBar from '../components/ProgressBar';
import { useAuth } from '../contexts/AuthContext';
import useQuestions from '../hooks/useQuestions';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      action.value.forEach((question) => {
        question.options.forEach((option) => (option.checked = false));
      });
      return action.value;

    case 'answer':
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

function Quiz() {
  const { id } = useParams();
  const { error, loading, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: 'questions',
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: 'answer',
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // handler for next button for progress bar
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  // handler for prev button for progress bar
  const prevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  // calculate the percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  // submit quiz result handler
  const submitQuizHandler = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, { state: qna });
  };

  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}
      {error && <p>There was an error!</p>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input={true}
            options={qna[currentQuestion].options}
            changeHandler={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
            submit={submitQuizHandler}
          />
          <MiniPlayer />
        </>
      )}
    </React.Fragment>
  );
}

export default Quiz;
