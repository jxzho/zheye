import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ContentItem } from "../style";
import { Pagination } from 'antd';
import { actionCreators as actions } from '../store';
import moment from 'moment';

class Content extends PureComponent {
  state = {
    defaultCurrent: 1,
    defaultPageSize: 7
  }

  handleOnChange = (page, pageSize) => {
    this.props.getArticles(page, pageSize);
  }

  render() {
    const { total, data } = this.props;
    const { defaultCurrent, defaultPageSize } = this.state;
    return (
      <div className="content-wrapper">
        {data.map(item => (
          <ContentItem key={item.id}>
            <div className="item-info">
              <div className="main-info">
                <h3>{item.title}</h3>
              </div>
              <div className="less-info">
                <p className="source">
                  <span>{item.user.nickname}</span>
                  <span>{moment(item.updateAt).format('YYYY-MM-DD')}</span>
                  <span>24人浏览</span>
                </p>
              </div>
            </div>
          </ContentItem>
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
    this.props.getArticles(defaultCurrent, defaultPageSize);
  }
}

const mapState = state => ({
  total: state.getIn(['forum', 'total']),
  data: state.getIn(['forum', 'data']),
});

const mapDispatch = dispatch => ({
  getArticles: (page, pageSize) => dispatch(actions.getArticles(page, pageSize))
});

export default connect(
  mapState,
  mapDispatch
)(Content);
