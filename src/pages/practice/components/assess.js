import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Icon, Rate, Button } from "antd";
import Radar from "../../../common/chart/Radar";
import { timeFormat } from "../../../utils";

class Assess extends PureComponent {
  state = {
    right: 0,
    score: 0
  };

  initData = () => {
    const { done } = this.props;
    let right = 0;
    done.forEach(item => {
      if (item.get('userAns') == item.get('right')) {
        right++;
      }
    });

    this.setState({
      right,
      score: parseInt((right / done.size) * 100).toFixed(1)
    });
  };

  render() {
    const { right, score } = this.state;
    const { issues, duration, type } = this.props;
    return (
      <div className="access-wrapper">
        <div className="left">
          <div className="title">
            <Icon type="pie-chart" theme="twoTone" twoToneColor="#FADB14" />
            得分：{score}
          </div>
          <div className="item">
            试卷： {type}专项练习
            <Rate disabled defaultValue={3} count={3} />
          </div>
          <div className="item">
            正确题数： {`${right}/${issues.size}`}
          </div>
          <div className="item">得分： {score}</div>
          <div className="item">用时： {timeFormat(duration)}</div>
        </div>
        <div className="right">
          <Radar />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.initData();
  }
}

const mapState = state => ({
  type: state.getIn(["practice", "type"]),
  issues: state.getIn(["practice", "issues"]),
  done: state.getIn(["practice", "done"]),
  duration: state.getIn(["practice", "duration"])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Assess);
