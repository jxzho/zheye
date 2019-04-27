import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import { actionCreators as actions } from "../store";
import { actionCreators as modalAction } from '../../../common/modal/store';
import { timeFormat } from '../../../utils';
import "../style.scss";

class Timer extends Component {
  state = {
    timer: undefined,
    totalTime: 0,
    status: 0
  };

  timerClick = () => {
    const { switchOn, switchPause, changeModal, changeDuration } = this.props;
    const { status, timer } = this.state;

    if (status === 0) {
      const timer = setInterval(() => {
        const { totalTime } = this.state;
        changeDuration(totalTime + 1);
        this.setState({
          totalTime: totalTime + 1
        });
      }, 1000);
      this.setState({ timer, status: 1 });
      switchOn();
    } else {
      clearInterval(timer);
      changeModal({
        visible: true,
        title: '是否继续?',
        onOk: () => this.timerClick()
      });
      this.setState({
        status: 0
      });
      switchPause();
    }
  };

  render() {
    const { totalTime, status } = this.state;
    return (
      <div className="timer-wrapper">
        <Icon
          type={status === 0 ? "play-circle" : "pause-circle"}
          theme="twoTone"
          twoToneColor="#F8855B"
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={this.timerClick}
        />
        <span className="timer-text">{timeFormat(totalTime)}</span>
      </div>
    );
  }

  componentDidMount() {
    this.timerClick();
  }

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }
}

const mapState = state => ({
  on: state.getIn(["practice", "on"])
});

const mapDispatch = dispatch => ({
  switchOn: () => dispatch(actions.switchOn()),
  switchPause: () => dispatch(actions.switchPause()),
  changeModal: (data) => dispatch(modalAction.changeModal(data)),
  changeDuration: data => dispatch(actions.changeDuration(data))
});

export default connect(
  mapState,
  mapDispatch
)(Timer);
