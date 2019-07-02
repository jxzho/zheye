import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class Result extends PureComponent {
  handleGetIframe = (iframe) => {
    this.props.getIframe(iframe);
  }

  render() {
    const { controlWidth, invisible } = this.props;
    return (
      <div className="code-output" style={{ display: invisible ? 'block' : 'none' }}>
        <header className="code-header">
          Output
        </header>
        <iframe
          className="iframe-codepan"
          title="zheye-codepan"
          ref={this.handleGetIframe}
        />
      </div>
    )
  }
}

const mapState = state => ({
  controlWidth: state.getIn(['codePan', 'controlWidth'])
});

const mapDispatch = dispatch => ({
  getIframe: (iframe) => dispatch(actionCreators.getIframe(iframe))
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Result));