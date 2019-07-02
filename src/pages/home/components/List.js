import React, { Component } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { Icon, Tag, Skeleton } from "antd";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import { stripHTML } from "../../../utils";
import ZLink from "../../../common/user/components/link";

class List extends Component {
  state = {
    activeIndex: -1
  }

  shortDesc = desc => `${desc.substring(0, 150)}...`;

  handleMouseEnter = index => {
    this.setState({
      activeIndex: index
    });
  };

  handleMouseLeave = () => {
    this.setState({
      activeIndex: -1
    });
  }

  render() {
    const { list, getMoreList, page, pageSize, isListLoading } = this.props;
    const { activeIndex } = this.state;
    return (
      <div className="article-list">
        <Tag color="#108ee9">文章区</Tag>
        {isListLoading
          ? <Skeleton active />
          : list.map((item, index) => {
            const id = item.get("id");
            const title = item.get("title");
            const content = item.get("content");
            const like = item.get("like");
            const collect = item.get("collect");
            const comment = item.get("commentId");
            const commentCount = comment ? JSON.parse(comment).length : 0;
            return (
              <ListItem
                key={id}
                className={activeIndex === index ? "animated pulse infinite" : ""}
                onMouseEnter={this.handleMouseEnter.bind(null, index)}
                onMouseLeave={this.handleMouseLeave}
              >
                <div className="show-content">
                  {activeIndex === index ? (
                    <div className="show-detail-item" >
                      <Icon type="search" style={{ fontSize: 20 }} />
                    </div>
                  ) : null}
                  <ListInfo>
                    <Link to={"/detail/" + id}>
                      <h3 className="title">{title}</h3>
                    </Link>
                    <p className="desc">{this.shortDesc(stripHTML(content))}</p>
                  </ListInfo>
                </div>
                <ZLink source={{ like, collect, comment: commentCount }} />
              </ListItem>
            );
          })}
        {list.size > 0 ? (
          <LoadMore>
            <span className="click" onClick={getMoreList.bind(null, page, pageSize)}>
              view more
            <Icon
                type="down-circle"
                theme="twoTone"
                style={{ marginLeft: "10px" }}
              />
            </span>
          </LoadMore>
        ) : null}
      </div>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "article", "page"]),
  pageSize: state.getIn(["home", "article", "pageSize"]),
  isListLoading: state.getIn(["home", "isListLoading"]),
});

const mapDispatch = dispatch => ({
  getMoreList: (page, pageSize) =>
    dispatch(actionCreators.getMoreList(page, pageSize))
});

export default connect(
  mapState,
  mapDispatch
)(List);
