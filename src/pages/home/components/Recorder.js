import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { RecorderWrapper } from "../style";
import { actionCreators as userAction } from "../../../common/user/store";

class Recorder extends Component {
  render() {
    const { userId, record, recordToday } = this.props;
    return (
      <RecorderWrapper>
        <div className="left">
          <span className="week">周四</span>
          <span className="date">03-28</span>
        </div>
        <div className="right">
          <div className="info">
            <span className="top">已打开3天</span>
            <div className="bottom">排名>100</div>
          </div>
          <Button type="primary" onClick={recordToday.bind(null, userId)} disabled={record}>
            {record ? "已打卡" : "今日打卡"}
          </Button>
        </div>
      </RecorderWrapper>
    );
  }

  componentDidMount() {
    this.props.getRecord(this.props.userId);
  }
}

export const mapState = state => ({
  userId: state.getIn(["user", "user", "id"]),
  record: state.getIn(["user", "record"])
});

export const mapReducer = dispatch => ({
  recordToday: id => dispatch(userAction.recordToday(id)),
  getRecord: id => dispatch(userAction.getRecord(id))
});

export default connect(
  mapState,
  mapReducer
)(Recorder);
