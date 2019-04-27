import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Progress, Button, Radio, Rate } from "antd";
import Timer from "./timer";
import { actionCreators as practiceAction } from "../store";
import { actionCreators as modalAction } from "../../../common/modal/store";
const RadioGroup = Radio.Group;

class Problem extends PureComponent {
  state = {
    curIndex: 0,
    ansIndex: -1
  };

  selectAnswer = e => {
    this.setState({ ansIndex: e.target.value });
  };

  nextIssue = () => {
    const { issues, changeDone, user } = this.props;
    const { curIndex, ansIndex } = this.state;
    const total = issues.size;
    const nextIndex = curIndex + 1;

    const data = {
      userId: user.get("id"),
      problemId: issues.getIn([curIndex, "id"]),
      userAns: ansIndex,
      right: issues.getIn([curIndex, "right"])
    };
    changeDone(data);

    if (nextIndex !== total) {
      this.setState({
        curIndex: nextIndex
      });
    } else {
      this.createResult(); // last one
    }
  };

  preIssue = () => {
    const { curIndex } = this.state;
    this.setState({
      curIndex: curIndex - 1
    });
  };

  calcuPercent = () => {
    const { issues } = this.props;
    const total = issues.size;
    const { curIndex } = this.state;
    return (((curIndex + 1) / total) * 100).toFixed(2);
  };

  onCollect = (problemId, status) => {
    const userId = this.props.user.get("id");
    this.props.collectProblem({
      status,
      userId,
      problemId
    });
  };

  progressText = () => {
    const { issues } = this.props;
    const total = issues.size;
    const { curIndex } = this.state;
    return (
      <span className="progress-text">{`${curIndex + 1} / ${total}`}</span>
    );
  };

  createResult = () => {
    setTimeout(params => {
      const { changeModal, uploadProblemsDone, done, history } = this.props;
      changeModal({
        visible: true,
        title: "确认交卷",
        onOk: () => {
          uploadProblemsDone(done.toJS());
          history.replace("/practice/result");
        }
      });
    }, 0);
  };

  render() {
    const { issues } = this.props;
    const { curIndex } = this.state;
    const f = issues.get(curIndex);
    const total = issues.size;

    if (total !== 0) {
      return (
        <div className={"problem-panel"}>
          <header className="header">
            <Progress
              showInfo={false}
              percent={((curIndex + 1) / total) * 100}
              strokeWidth={12}
            />
            {this.progressText()}
            <Timer />
          </header>
          {f ? (
            <div className="issue-area">
              <h2>{`${curIndex + 1}. ${f.get("issue")}`}</h2>
              <ul>
                <RadioGroup onChange={this.selectAnswer} key={curIndex}>
                  {JSON.parse(f.get("ans")).map((item, index) => (
                    <Radio key={item + index} value={index}>
                      {item}
                    </Radio>
                  ))}
                </RadioGroup>
              </ul>
            </div>
          ) : null}
          <footer>
            <span className="collect">
              <Rate
                count={1}
                onChange={status => {
                  this.onCollect(f.get("id"), status);
                }}
                key={curIndex}
              />
              收藏
            </span>
            <Button type="primary" onClick={this.nextIssue}>
              {curIndex === total - 1 ? "提交" : "下一题"}
            </Button>
            {curIndex === 0 ? null : (
              <Button onClick={this.preIssue}>上一题</Button>
            )}
          </footer>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapState = state => ({
  user: state.getIn(["user", "user"]),
  on: state.getIn(["practice", "on"]),
  issues: state.getIn(["practice", "issues"]),
  done: state.getIn(["practice", "done"])
});

const mapDispatch = dispatch => ({
  changeDone: data => dispatch(practiceAction.changeDone(data)),
  changeModal: data => dispatch(modalAction.changeModal(data)),
  uploadProblemsDone: data => dispatch(practiceAction.uploadProblemsDone(data)),
  collectProblem: data => dispatch(practiceAction.collectProblem(data))
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Problem));
