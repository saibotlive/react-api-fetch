import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../../ui/Styles';

class Home extends Component {
  static propTypes = {
    appGetData: PropTypes.func.isRequired
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      data: nextProps.data
    };
  }

  state = {
    response: [],
    data: {}
  };

  componentDidMount() {
    if (this.state.data.photos === undefined) {
      this.props.appGetData();
    }
  }

  render() {
    const { response } = this.state;
    if (response.error) {
      return response.error && <ErrorMessage>Request failed</ErrorMessage>;
    } else return response && <div>WELCOME TO LONDON</div>;
  }
}

export default Home;
