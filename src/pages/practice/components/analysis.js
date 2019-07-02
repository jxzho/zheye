import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Pagination, Tag, Avatar, Icon, Button } from "antd";
import moment from "moment";
import api from '../../../api';
import Comment from './comment';

const ans = ["A", "B", "C", "D"];
const defaultAvatar = "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png";

class Analysis extends PureComponent {
  state = {
    curPage: 1,
    commentList: [],
    isShowSolution: false
  };

  pageChange = page => {
    this.setState({
      curPage: page
    });
  };

  convertRight = (curUserAns) => {
    if (curUserAns.get("problemType") === '单选') {
      return ans[curUserAns.get("right")];
    }
    if (curUserAns.get("problemType") === '多选') {
      const right = JSON.parse(curUserAns.get("right"));
      const newRight = right.map(item => {
        return this.convertPrefix(item)
      });
      return JSON.stringify(newRight);
    }
    if (curUserAns.get("problemType") === '判断') {
      return curUserAns.get("right") == 1 ? '正确' : '错误';
    }
  };

  convertMyAns = (curUserAns) => {
    if (curUserAns.get("problemType") === '单选') {
      return ans[curUserAns.get('userAns')];
    }
    if (curUserAns.get("problemType") === '多选') {
      const ans = JSON.parse(curUserAns.get('userAns'));
      const newAns = ans.map(item => {
        return this.convertPrefix(item)
      });
      return JSON.stringify(newAns);
    }
    if (curUserAns.get("problemType") === '判断') {
      return curUserAns.get("userAns") == true ? '正确' : '错误';
    }
  }

  convertIsRight = (right, myAns, problemType) => {
    if (problemType === '单选') {
      return right == myAns;
    }
    if (problemType === '多选') {
      return right == myAns;
    }
    if (problemType === '判断') {
      return right == myAns;
    }
  };

  convertClass = (right, index, problemType) => {
    if (problemType === '单选') {
      return ans.indexOf(right) === index ? "ans-item right" : "ans-item";
    }
    if (problemType === '多选') {
      return JSON.parse(right)
        .indexOf(this.convertPrefix(index)) !== -1
        ? "ans-item right"
        : "ans-item";
    }
  }

  convertPrefix = (index) => {
    let value = '';
    switch (index) {
      case 0:
        value = 'A';
        break;
      case 1:
        value = 'B';
        break;
      case 2:
        value = 'C';
        break;
      case 3:
        value = 'D';
        break;
      default:
        break;
    }
    return value;
  };

  renderComment = (problemId) => {
    const { commentList } = this.state;
    api.getProblemComments(problemId).then(res => {
      const data = res.data;
      this.setState({
        commentList: data.data
      });
    });
    return (
      <div className="comment-area">
        {commentList.length === 0
          ? "暂无评论"
          : (
            <div className="comment-count">共有{commentList.length}条讨论</div>
          )}
        <ul className="comment-list">
          {commentList.map(item => (
            <li className="comment-item" key={item.id}>
              <div className="user">
                <Avatar src={item.user.avatar ? item.user.avatar : defaultAvatar} />
                <span className="name">{item.user.userNickname}</span>
              </div>
              <p className="content" dangerouslySetInnerHTML={{ __html: item.content }} />
              <div className="footer">
                <div className="date">
                  评论于 {moment(item.createAt).format("YYYY-MM-DD HH:mm:ss")}
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
    )
  }

  handleShowSolution = () => {
    this.setState({
      isShowSolution: true
    });
  }

  render() {
    const { done, issues } = this.props;
    const { curPage, isShowSolution } = this.state;
    const curIndex = curPage - 1;
    const curProblem = issues.get(curIndex);
    const curUserAns = done.get(curIndex);
    const curAns = JSON.parse(curProblem.get("ans"));
    const right = this.convertRight(curUserAns);
    const myAns = this.convertMyAns(curUserAns);
    const problemType = curUserAns.get("problemType");
    const isRight = this.convertIsRight(right, myAns, problemType);

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
            {problemType === '判断' ? null : (
              <ul className="ans-list">
                {curAns.map((item, index) => (
                  <li
                    className={this.convertClass(right, index, problemType)}
                    key={index}
                  >
                    {`${this.convertPrefix(index)}. ${item}`}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="solution-area">
            <Button
              type="primary"
              icon="question"
              size="small"
              onClick={this.handleShowSolution}
            >
              查看解析
            </Button>
            {isShowSolution ? (
              <div className="problem-solution" key={curProblem.get("id")}>
                <div>
                  {curProblem.get("solution")}
                </div>
              </div>
            ) : null}
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
        {this.renderComment(curProblem.get("id"))}
        <footer>
          <Comment
            problemId={curProblem.get("id")}
          />
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
