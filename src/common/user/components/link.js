import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import '../style.scss';

class Link extends Component {
  render() {
    const { collect, like, comment } = this.props.source;
    return (
      <div className="zheye-ac-link">
        <span>
          <Icon type="star" />
          {collect}
        </span>
        <span>
          <Icon type="like" />
          {like}
        </span>
        <span>
          <Icon type="message" />
          {comment}
        </span>
      </div>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Link);
