import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Content from "./components/Content";

class Main extends PureComponent {
  render() {
    return (
      <div className="forum-main-area">
        <div className="left">
          <Header />
          <Content />
        </div>
        {/* <div className="right">right</div> */}
      </div>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Main);
