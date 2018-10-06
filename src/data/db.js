module.exports = function() {
  return {
    applyQuestions: require('./applyQuestions/applyQuestions.json'),
    questions: require('./questions/questions.json'),
    score: require('./score/score.json'),
    config: require('./config/config.json'),
  };
};
