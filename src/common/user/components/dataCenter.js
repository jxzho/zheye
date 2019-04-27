import React, { Component } from "react";
import { connect } from "react-redux";
import { Statistic, Card, Row, Col, Icon } from "antd";
import PassRate from "./data_center/pass";
import Skill from "./data_center/skill";
import Recent from "./data_center/recent";
import { Scrollbars } from "react-custom-scrollbars";
import { actionCreators as userAction } from '../store';

const colSpan = 8;

class DataCenter extends Component {
  render() {
    const { finish = {}, like } = this.props;
    return (
      <Scrollbars style={{ width: "100%" }}>
        <div className="data-center-wrapper">
          <Row gutter={16}>
            <Col span={colSpan}>
              <Card>
                <Statistic
                  title="做题增长"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: "#3f8600" }}
                  prefix={<Icon type="arrow-up" />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={colSpan}>
              <Card>
                <Statistic
                  title="收获点赞"
                  value={like}
                  prefix={<Icon type="like" />}
                />
              </Card>
            </Col>
            <Col span={colSpan}>
              <Card>
                <Statistic title="完成题数" value={finish.cur} suffix={`/ ${finish.total}`} />
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Card>
                <PassRate />
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Card>
                <Skill />
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Card>
                <Recent />
              </Card>
            </Col>
          </Row>
        </div>
      </Scrollbars>
    );
  }

  componentDidMount() {
    this.props.initDataCenter(this.props.userId);
  }
}

const mapState = state => ({
  userId: state.getIn(["user", "user", "id"]),
  finish: state.getIn(["user", "dataCenter", "finish"]),
  like: state.getIn(["user", "dataCenter", "like"])
});

const mapDispatch = dispatch => ({
  initDataCenter: id => dispatch(userAction.getDataCenter(id))
});

export default connect(
  mapState,
  mapDispatch
)(DataCenter);
