import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Switch } from "antd";
import { actionCreators as action } from '../store';

class mdController extends PureComponent {
  render() {
    return (
      <div className="mode-controller">
        <Switch
          checkedChildren="开"
          unCheckedChildren="关"
          defaultChecked
          onChange={this.props.switchMode}
          checked={this.props.mode}
        />
        <span>markdown模式</span>
      </div>
    );
  }
}

const mapState = state => ({
  mode: state.getIn(['write', 'mode'])
});

const mapDispatch = dispatch => ({
  switchMode: data => dispatch(action.switchMode(data))
});

export default connect(
  mapState,
  mapDispatch
)(mdController);
