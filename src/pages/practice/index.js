import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Do from './do';
import Upload from './upload';
import Result from './components/result';
import Header from "../../common/header";
import "./style.scss";

class Practice extends PureComponent {
  render() {
    const { login, match } = this.props;
    if (!login) {
      return (
        <Redirect to="/login" />
      )
    } else {
      return (
        <div className="main-con">
          <Header />
          <Route path={`${match.path}/do`} component={Do} />
          <Route path={`${match.path}/upload`} component={Upload} />
          <Route path={`${match.path}/result`} component={Result} />
        </div>
      )
    }
  }
}

const mapState = state => ({
  login: state.getIn(['login', 'login'])
})

const mapDispatch = dispatch => ({
  
})

export default connect(
  mapState,
  mapDispatch
)(Practice);