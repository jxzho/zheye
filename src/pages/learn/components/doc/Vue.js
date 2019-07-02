import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Menu } from 'antd';
import "../../style.scss";

class JavaScriptDoc extends PureComponent {
  render() {
    return (
      <iframe src="https://vuejs.org/" />
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
)(JavaScriptDoc);