import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Avatar, Icon } from "antd";
import { actionCreators } from "./store";
import GlobalHeader from "../../common/header";
import ReactMarkdown from "react-markdown";
import AddComment from './components/comment';
import ArticleAction from './components/action';
import moment from "moment";
import "./style.scss";

class Detail extends PureComponent {
  render() {
    const { article, user = {}, comment = [] } = this.props;
    const { title, content = "", like, updateAt } = article;
    return (
      <div className="main-con">
        <GlobalHeader />
        <div className="detail-wrapper">
          <h2 className="title">{title}</h2>
          <section className="user-area">
            <Avatar src={user.avatar} size={48} />
            <div className="info">
              <div className="top">
                <div className="name">{user.nickname}</div>
              </div>
              <div className="bottom">
                <span className="date">
                  {moment(updateAt).format("YYYY-MM-DD HH:mm:ss")}
                </span>
                <span className="word">字数 {content.length}</span>
                <span className="viewl">阅读 {"-"}</span>
                <span className="comment">评论 {comment.length}</span>
                <span className="like">喜欢 {like}</span>
              </div>
            </div>
          </section>
          <div className="content">
            <ReactMarkdown source={content} escapeHtml={false} />
          </div>
          <ArticleAction />
          <AddComment />
          <div className="comment">
            <h3 className="title">{comment.length}条评论</h3>
            <ul className="list">
              {comment.map(item => {
                const { user = {}, createAt, content, like, id } = item;
                return (
                  <li className="item" key={id}>
                    <div className="user">
                      <Avatar src={user.avatar} />
                      <div className="info">
                        <span className="top">{user.nickname}</span>
                        <span className="bottom">
                          评论于 {moment(createAt).format("YYYY-MM-DD HH:mm:ss")}
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      {content}
                    </div>
                    <div className="footer">
                      <Icon type="like" />{like}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = state => ({
  article: state.getIn(["detail", "article"]),
  user: state.getIn(["detail", "article", "user"]),
  comment: state.getIn(["detail", "article", "comment"])
});

const mapDispatch = dispatch => ({
  getDetail: id => dispatch(actionCreators.getDetail(id))
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail));
