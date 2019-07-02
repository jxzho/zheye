import React, { Component } from "react";
import { connect } from "react-redux";
import { Tag, Avatar, Pagination, Empty } from "antd";
import { actionCreators as userAction } from "../store";
import { stripHTML } from "../../../utils";
import * as moment from "moment";
import { Link } from "react-router-dom";
import ZLink from "./link";

class ArticleList extends Component {
  pageChange = (page, pageSize) => {
    const id = this.props.user.get("id");
    this.props.getArticles(id, { page, pageSize });
  }

  render() {
    const { list, info, page, pageSize, total } = this.props;
    return (
      <div className="article-wrapper">
        {list.size > 0
          ? (
            <ul className="list">
              <h2 className="title">发表{list.size}个文章</h2>
              {list.map((item, index) => {
                const id = item.get("id");
                const content = stripHTML(item.get("content"));
                const createAt = item.get("createAt");
                return (
                  <li className="item" key={id}>
                    <Link to={`/detail/${id}`}>
                      <div className="header">
                        <Avatar src={info.get("avatar")} size={20} />
                        <h2 className="title">{item.get("title")}</h2>
                      </div>
                    </Link>
                    <p className="content">{content.slice(0, 200) + "..."}</p>
                    <div className="info">
                      <span className="prefix">发布于</span>
                      <span className="date">
                        {moment(createAt).format("YYYY-MM-DD HH:mm")}
                      </span>
                    </div>
                    <ZLink source={{ collect: index, like: index, comment: index }} />
                  </li>
                );
              })}
            </ul>
          ) : <Empty description="去发表一个文章吧~" />}
        <Pagination
          simple
          defaultCurrent={page}
          defaultPageSize={pageSize}
          total={total}
          onChange={this.pageChange}
        />
      </div>
    );
  }

  componentDidMount() {
    const { page, pageSize } = this.props;
    const id = this.props.user.get("id");
    this.props.getArticles(id, { page, pageSize });
  }
}

const mapState = state => ({
  user: state.getIn(["user", "user"]),
  info: state.getIn(["user", "user", "info"]),
  page: state.getIn(["user", "article", "page"]),
  pageSize: state.getIn(["user", "article", "pageSize"]),
  total: state.getIn(["user", "article", "total"]),
  list: state.getIn(["user", "article", "list"])
});

const mapDispatch = dispatch => ({
  getArticles: (id, data) => dispatch(userAction.getArticles(id, data))
});

export default connect(
  mapState,
  mapDispatch
)(ArticleList);
