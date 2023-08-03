import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsWrapper, StatItem } from './Statistics.styles';

const Statistics = ({ feedback }) => {
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <StatisticsWrapper>
      <StatItem>Good: {feedback.good}</StatItem>
      <StatItem>Neutral: {feedback.neutral}</StatItem>
      <StatItem>Bad: {feedback.bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive Feedback: {positivePercentage}%</StatItem>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};


export default Statistics;