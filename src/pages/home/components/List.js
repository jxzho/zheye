import React, { Component } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { Icon } from "antd";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import { stripHTML } from "../../../utils";
import ZLink from "../../../common/user/components/link";

class List extends Component {
  shortDesc = desc => `${desc.substring(0, 150)}...`;

  render() {
    const { list, getMoreList, page, pageSize } = this.props;
    return (
      <div>
        {list.map(item => {
          const id = item.get("id");
          const title = item.get("title");
          const imgUrl = item.get("imgUrl");
          const content = item.get("content");
          const like = item.get("like");
          const collect = item.get("collect");
          const comment = item.get("commentId");
          const commentCount = comment ? JSON.parse(comment).length : 0;
          return (
            <ListItem key={id}>
              <div className="show-content">
                <ListInfo>
                  <Link to={"/detail/" + id}>
                    <h3 className="title">{title}</h3>
                  </Link>
                  <p className="desc">{this.shortDesc(stripHTML(content))}</p>
                </ListInfo>
                <img className="pic" src={imgUrl} alt="" />
              </div>
              <ZLink source={{ like, collect, comment: commentCount }} />
            </ListItem>
          );
        })}
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
      </div>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "article", "page"]),
  pageSize: state.getIn(["home", "article", "pageSize"])
});

const mapDispatch = dispatch => ({
  getMoreList: (page, pageSize) =>
    dispatch(actionCreators.getMoreList(page, pageSize))
});

export default connect(
  mapState,
  mapDispatch
)(List);
