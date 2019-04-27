import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Icon } from "antd";
import { RecommendWrapper, RecommendItem } from "../style";
import { actionCreators as modalAction } from "../../../common/modal/store";
import TypeSelect from "../../practice/components/typeSelect";

class Recommend extends PureComponent {
  goPractice = () => {
    const { changeModal, history } = this.props;
    changeModal({
      visible: true,
      title: "选择题目项",
      content: <TypeSelect />,
      onOk: () => {
        history.push(`/practice/do`);
      }
    });
  };

  render() {
    return (
      <RecommendWrapper>
        <RecommendItem bgColor="#FFB84F" onClick={this.goPractice}>
          <Icon type="edit" theme="filled" />
          去做题
          <Icon type="caret-right" theme="filled" className="right" />
        </RecommendItem>
        <Link to="/user/info?view=dataCenter">
          <RecommendItem bgColor="#F8855B">
            <Icon type="dashboard" theme="filled" />
            数据中心
            <Icon type="caret-right" theme="filled" className="right" />
          </RecommendItem>
        </Link>
        <RecommendItem bgColor="#C1E4DE">
          <Icon type="eye" theme="filled" />
          社区帖子
          <Icon type="caret-right" theme="filled" className="right" />
        </RecommendItem>
        <Link to="/user/info">
          <RecommendItem bgColor="#B7D6EC">
            <Icon type="skin" theme="filled" />
            个人信息
            <Icon type="caret-right" theme="filled" className="right" />
          </RecommendItem>
        </Link>
      </RecommendWrapper>
    );
  }
}

const mapState = null;

const mapDispatch = dispatch => ({
  changeModal: data => dispatch(modalAction.changeModal(data))
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(Recommend));
