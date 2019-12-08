import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import publications from '../../info/publication.json';

class Reader extends Component {
  state = {
    index: 0,
  };

  static propTypes = {
    location: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    this.setPageAccordingToUrlParse();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      this.setPageAccordingToUrlParse();
    }
  }

  setPageAccordingToUrlParse = () => {
    const { location } = this.props;
    const parsedNumber = queryString.parse(location.search).item;
    const numberOfItem = parsedNumber - 1;

    if (parsedNumber >= 1 && parsedNumber <= publications.length) {
      this.setState({
        index: numberOfItem,
      });
    } else {
      this.setState(
        {
          index: 0,
        },
        this.changeUrl,
      );
    }
  };

  handleChangeValue = target => {
    const { index } = this.state;
    this.setState(
      {
        index: target.name === 'Deposit' ? index + 1 : index - 1,
      },
      this.changeUrl,
    );
  };

  changeUrl() {
    const { history, location } = this.props;
    const { index } = this.state;
    history.push({
      pathname: location.pathname,
      search: `item=${index + 1}`,
    });
  }

  render() {
    const { index } = this.state;
    return (
      <div className="reader">
        <Controls
          onChange={this.handleChangeValue}
          index={index}
          publications={publications}
        />
        <Counter index={index} publications={publications} />
        <Publication publication={publications[index]} />
      </div>
    );
  }
}

export default Reader;
