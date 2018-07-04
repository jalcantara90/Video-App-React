import React, { Component } from 'react';
import LoginLayout from '../../sections/components/loading';
import { connect } from 'react-redux';
class Loading extends Component {
  componentDidMount() {
    if(this.props.user) {
      this.props.navigation.navigate('App');
    }else {
      this.props.navigation.navigate('Login');
    }
  }
  render() {
    return(
      <LoginLayout />
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Loading);