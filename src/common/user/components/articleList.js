import React, { Component } from "react";
import { connect } from "react-redux";
import { Tag, Avatar, Pagination } from "antd";
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
        <ul className="list">
          <h2 className="title">共{list.size}个文章</h2>
          {list.map(item => {
            const id = item.get("id");
            const content = stripHTML(item.get("content"));
            const createAt = item.get("createAt");
            return (
              <li className="item" key={id}>
                <Link to={`/detail/${id}`}>
                  <h2 className="title">标题：{item.get("title")}</h2>
                </Link>
                <div className="label">
                  <Tag>Ant Design</Tag>
                  <Tag>设计语言</Tag>
                  <Tag>蚂蚁金服</Tag>
                </div>
                <p className="content">{content.slice(0, 200) + "..."}</p>
                <div className="info">
                  <Avatar src={info.get("avatar")} />
                  <span className="name">junxio</span>
                  发布于
                  <span className="date">
                    {moment(createAt).format("YYYY-MM-DD HH:mm")}
                  </span>
                </div>
                <ZLink source={{ collect: 69, like: 89, comment: 166 }} />
              </li>
            );
          })}
        </ul>
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
  info: state.getIn(["user", "info"]),
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
