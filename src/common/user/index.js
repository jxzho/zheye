import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Info from "./info";
import SetUp from "./setup";
import Header from "../header";

class User extends Component {
  render() {
    const { match } = this.props;
    const { login } = this.props;
    if (!login) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div className="main-con">
          <Header />
          <div className="user-wrapper">
            <Route path={`${match.path}/info`} exact component={Info} />
            <Route path={`${match.path}/setup`} exact component={SetUp} />
          </div>
        </div>
      );
    }
  }
}

const mapState = state => ({
  login: state.getIn(["login", "login"])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(User);
