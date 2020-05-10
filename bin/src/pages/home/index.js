import PropTypes from "prop-types";
import React from "react";
import _ from "underscore";

class Home extends React.Component {
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
    const {} = this.state;
    return (
      <header className="jumbotron">
        <h1>Hello World!</h1>
      </header>
    );
  }
}

Home.propTypes = {};

export default Home;
