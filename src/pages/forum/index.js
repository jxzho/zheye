import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../../common/header";
import Main from "./main";
import "./style.scss";

class Forum extends PureComponent {
  render() {
    const { login } = this.props;
    if (!login) {
      return (
        <React.Fragment>
          <Header />
          <div className="forum-wrapper">
            <Main />
          </div>
        </React.Fragment>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Forum);
