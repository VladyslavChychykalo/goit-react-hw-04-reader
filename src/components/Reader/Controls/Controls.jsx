import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

class Controls extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    publications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  handleTakeValue = target => {
    this.props.onChange(target);
  };

  render() {
    const { publications } = this.props;
    const { index } = this.props;
    return (
      <section className={styles.controls}>
        <button
          name="Withdraw"
          onClick={({ target }) => this.handleTakeValue(target)}
          type="button"
          className={styles.button}
          disabled={!index}
        >
          Назад
        </button>
        <button
          name="Deposit"
          onClick={({ target }) => this.handleTakeValue(target)}
          type="button"
          className={styles.button}
          disabled={index >= publications.length - 1}
        >
          Вперед
        </button>
      </section>
    );
  }
}

export default Controls;
