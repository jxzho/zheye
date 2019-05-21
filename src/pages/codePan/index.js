import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";

class CodePan extends PureComponent {
  render() {
    return (
      <div className="zheye-codepan-container">
        <iframe className="codepan" src="http://192.168.0.3:4000/" />
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