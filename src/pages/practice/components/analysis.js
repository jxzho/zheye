import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Pagination, Tag, Avatar, Icon, Button } from "antd";
import commentList from "../mock/commentList.json";
import moment from "moment";

const ans = ["A", "B", "C", "D"];

class Analysis extends PureComponent {
  state = {
    curPage: 1
  };

  pageChange = page => {
    this.setState({
      curPage: page
    });
  };

  render() {
    const { done, issues } = this.props;
    const { curPage } = this.state;
    const curIndex = curPage - 1;
    const curProblem = issues.get(curIndex);
    const curUserAns = done.get(curIndex);
    const curAns = JSON.parse(curProblem.get("ans"));
    const right = ans[curProblem.get("right")];
    const myAns = ans[curUserAns.get("userAns")];
    const isRight = right === myAns;

    return (
      <div className="analysis-wrapper">
        <div className="problem-area">
          <div className="issue">
            <Tag color="blue">{curPage}</Tag>
            {curProblem.get("issue")}
          </div>
          <div className="ans">
            <div className="ans-result-area">
              <span className="ans-right">正确答案: {right}</span>
              <span className="ans-mine">你的答案: {myAns}</span>
              <span
                className={isRight ? "ans-result right" : "ans-result error"}
              >
                {isRight ? "正确" : "错误"}
              </span>
            </div>
            <ul className="ans-list">
              {curAns.map((item, index) => (
                <li
                  className={ans.indexOf(right) === index ? "ans-item right" : "ans-item"}
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pagination-area">
          <Pagination
            current={curPage}
            defaultCurrent={curPage}
            total={done.size * 10}
            onChange={this.pageChange}
          />
        </div>
        <div className="comment-area">
          <div className="comment-count">共有{commentList.length}条讨论</div>
          <ul className="comment-list">
            {commentList.map(item => (
              <li className="comment-item" key={item.id}>
                <div className="user">
                  <Avatar src={item.userAvatar} />
                  <span className="name">{item.userNickname}</span>
                </div>
                <p className="content">{item.content}</p>
                <div className="footer">
                  <div className="date">
                    评论于 {moment(item.creatAt).format("YYYY-MM-DD HH:mm:ss")}
                  </div>
                  <span className="like">
                    <Icon type="like" />
                    {item.like}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <footer>
          <Button type="primary">添加评论</Button>
        </footer>
      </div>
    );
  }
}

const mapState = state => ({
  done: state.getIn(["practice", "done"]),
  issues: state.getIn(["practice", "issues"])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Analysis);
