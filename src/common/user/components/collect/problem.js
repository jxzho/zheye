import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators as userAction } from "../../store";
import { Empty, Tag } from "antd";

class CollectProblem extends Component {
  render() {
    const { problem } = this.props;
    return (
      <div className="collect-problem-wrapper">
        {problem.size === 0 ? (
          <Empty description="暂无题目收藏" />
        ) : (
          <ul className="list">
            <h2 className="title">收藏{problem.size}个试题</h2>
            {problem.map(item => (
              <li className="item" key={item.get("id")}>
                <p className="issue">{item.getIn(["problem", "issue"])}</p>
                <Tag color="#108ee9">{item.getIn(["problem", "contentType"])}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  componentDidMount() {
    const userId = this.props.user.get("id");
    this.props.getCollect(userId, "problem");
  }
}

const mapState = state => ({
  user: state.getIn(["user", "user"]),
  problem: state.getIn(["user", "collect", "problem"])
});

const mapDispatch = dispatch => ({
  getCollect: (id, type) => dispatch(userAction.getCollect(id, type))
});

export default connect(
  mapState,
  mapDispatch
)(CollectProblem);
