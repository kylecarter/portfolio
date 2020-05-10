import PropTypes from 'prop-types';
import React from 'react';
import _ from 'underscore';

class FourOhFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = _.extend({}, props);
  }

  /**
   * @function
   * componentWillMount()
   *
   * Use this to call API functions. Functions can be defined to the
   * parent class as additional methods.
   */

  render() {
    return (
      <header className="jumbotron">
        <h1>Ah Snap! Not found buddy.</h1>
      </header>
    );
  }
}

FourOhFour.propTypes = {};

export default FourOhFour;
