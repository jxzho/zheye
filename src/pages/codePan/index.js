import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CodePanHeader from "./header";
import CodePanPanel from "./panel";
import "./style.scss";
import "../../../node_modules/codemirror/lib/codemirror.css";

class CodePan extends PureComponent {
  render() {
    return (
      <div className="zheye-codepan-container">
        <CodePanHeader />
        <CodePanPanel />
        <footer>zheye code panel</footer>
      </div>
    )
  }
}

const mapState = state => ({
  
});

const mapDispatch = dispatch => ({

});

export default connect(
  mapState,
  mapDispatch
)(withRouter(CodePan));