import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ResizerLine from "../components/resizer-line";

class Console extends PureComponent {
  handleGetIframe = (iframe) => {
    this.props.getIframe(iframe);
  }

  render() {
    const { controlWidth, invisible } = this.props;
    return (
      <div className="code-console" style={{ display: invisible ? 'block' : 'none' }}>
        <header className="code-header">
          Console
        </header>
        <ResizerLine lan="console" />
      </div>
    )
  }
}

const mapState = state => ({
  controlWidth: state.getIn(['codePan', 'controlWidth'])
});

const mapDispatch = dispatch => ({
  
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Console));