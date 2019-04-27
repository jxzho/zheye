import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators as userAction } from "../../store";
import { Empty, Avatar } from "antd";
import moment from "moment";
import { stripHTML } from "../../../../utils";
import ZLink from "../link";

class CollectArticle extends Component {
  dateFormat = time => moment(time).format("YYYY-MM-DD HH:mm:ss");

  render() {
    const { article } = this.props;
    return (
      <div className="collect-article-wrapper">
        {article.size === 0 ? (
          <Empty description="暂无文章收藏" />
        ) : (
          <ul className="list">
            <h2 className="title">收藏{article.size}个文章</h2>
            {article.map(item => (
              <li className="item" key={item.get("id")}>
                <div className="header">
                  <Avatar
                    src={item.getIn(["article", "userInfo", "avatar"])}
                    size={20}
                  />
                  <Link to={`/detail/${item.getIn(["article", "id"])}`}>
                    <span className="title">
                      {item.getIn(["article", "title"])}
                    </span>
                  </Link>
                </div>
                <p className="content">
                  {`${stripHTML(item.getIn(["article", "content"])).substr(
                    0,
                    150
                  )}}...`}
                </p>
                <span className="date">
                  收藏于 {this.dateFormat(item.get("createAt"))}
                </span>
                <ZLink
                  source={{
                    collect: item.getIn(["article", "collect"]),
                    like: item.getIn(["article", "like"]),
                    comment: JSON.parse(item.getIn(["article", "commentId"]))
                      .length
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  componentDidMount() {
    const userId = this.props.user.get("id");
    this.props.getCollect(userId, "article");
  }
}

const mapState = state => ({
  user: state.getIn(["user", "user"]),
  article: state.getIn(["user", "collect", "article"])
});

const mapDispatch = dispatch => ({
  getCollect: (id, type) => dispatch(userAction.getCollect(id, type))
});

export default connect(
  mapState,
  mapDispatch
)(CollectArticle);
