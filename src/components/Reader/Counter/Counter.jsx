import React from 'react';
import PropTypes from 'prop-types';
import { counter } from './Counter.module.css';

const Counter = ({ publications, index }) => {
  return (
    <>
      <p className={counter}>
        {index + 1}/{publications.length}
      </p>
    </>
  );
};

Counter.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  index: PropTypes.number.isRequired,
};

export default Counter;
