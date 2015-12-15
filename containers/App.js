import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { resetErrorMessage } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleDismissClick = this.handleDismissClick.bind(this);
  }
  handleDismissClick() {
    this.props.pushState(null, `/${nextValue}`);
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if(!errorMessage) {
      return null;
    }

    return (
      <p>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#" onClick={this.handleDismissClick}>Dismiss</a>)
      </p>
    );
  }
  render () {
    const { children } = this.this.props;
    return(
      <div>
        <h1>App rendered</h1>
        {this.renderErrorMessage()}
        {children}
      </div>
    );
  }
}

App.propTypes = {
  //Injected by React redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  //Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.location.pathname.substring(1)
  };
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  pushState
})(App);
