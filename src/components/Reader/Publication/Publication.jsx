import React from 'react';
import PropTypes from 'prop-types';
import { publications } from './Publication.module.css';

const Publication = ({ publication }) => {
  return (
    <article key={publication.id} className={publications}>
      <h2>{publication.title}</h2>
      <p>{publication.text}</p>
    </article>
  );
};

Publication.propTypes = {
  publication: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
