import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ContentItem } from "../style";
import { Pagination, Avatar, Skeleton } from "antd";
import { actionCreators as actions } from "../store";
import moment from "moment";

class Content extends PureComponent {
  state = {
    defaultCurrent: 1,
    defaultPageSize: 7
  };

  handleOnChange = (page, pageSize) => {
    this.props.getArticles(page, pageSize, this.props.contentType);
  };

  render() {
    const { total, data, isLoading } = this.props;
    const { defaultCurrent, defaultPageSize } = this.state;
    return (
      <div className="content-wrapper">
        {isLoading
          ? (
            <div>
              <Skeleton paragraph={false} active/>
              <Skeleton avatar title={false} active/>
            </div>
          )
          : data.map(item => (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <ContentItem key={item.id}>
                <div className="item-info">
                  <div className="main-info">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="less-info">
                    <p className="source">
                      <Avatar src={item.user.avatar} />
                      <span>{item.user.nickname}</span>
                      <span>{moment(item.updateAt).format("YYYY-MM-DD")}</span>
                      <span>发布</span>
                    </p>
                  </div>
                </div>
              </ContentItem>
            </Link>
          ))}
        <Pagination
          defaultCurrent={defaultCurrent}
          defaultPageSize={defaultPageSize}
          total={total}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }

  componentDidMount() {
    const { defaultCurrent, defaultPageSize } = this.state;
    this.props.getArticles(
      defaultCurrent,
      defaultPageSize,
      this.props.contentType
    );
  }
}

const mapState = state => ({
  total: state.getIn(["forum", "total"]),
  data: state.getIn(["forum", "data"]),
  contentType: state.getIn(["forum", "type"]),
  isLoading: state.getIn(["forum", "isLoading"]),
});

const mapDispatch = dispatch => ({
  getArticles: (page, pageSize, contentType) =>
    dispatch(actions.getArticles(page, pageSize, contentType))
});

export default connect(
  mapState,
  mapDispatch
)(Content);
