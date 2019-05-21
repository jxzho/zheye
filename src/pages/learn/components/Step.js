import React, { Component } from 'react';
import { Steps, Button, message, Tag, Select } from 'antd';
import StepPath from "./path";
import ReactMarkdown from "react-markdown";
const Step = Steps.Step;
const Option = Select.Option;

class Path extends Component {
  state = {
    current: 0,
    type: "primary"
  };

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  handleGradeChange = type => {
    this.setState({
      type,
      current: 0
    });
  };

  renderPathContent = () => {
    const { type } = this.state;
    return (
      StepPath[type].map((item, index) => (
        <Step key={item.title + index} title={item.title} />
      ))
    )
  }

  handleShowFinish = () => {
    const { type } = this.state;
    let typeText = '';
    switch (type) {
      case "primary":
        typeText = '初级'
        break;
      case "mid":
        typeText = '中级'
        break;
      case "high":
        typeText = '高级'
        break;
      default:
        break;
    }
    message.success(`${typeText}路线已走完!`);
  }

  render() {
    const { current, type } = this.state;
    return (
      <div className="primary-path">
        <div className="path-tag"><Tag color="#f50">学习路线</Tag></div>
        <div className="grade-select">
          <Select
            defaultValue={type}
            style={{ width: 120 }}
            onChange={this.handleGradeChange}
          >
            <Option value="primary">初级</Option>
            <Option value="mid">中级</Option>
            <Option value="high">高级</Option>
          </Select>
        </div>
        <Steps current={current} size="small" key={type}>
          {this.renderPathContent()}
        </Steps>
        <div className="steps-content">
          <div className="md-show-content">
            <ReactMarkdown source={StepPath[type][current].content} />
          </div>
        </div>
        <div className="steps-action">
          {current < StepPath[type].length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              下一步
            </Button>
          )}
          {current === StepPath[type].length - 1 && (
            <Button type="primary" onClick={this.handleShowFinish}>
              完成
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              上一步
            </Button>
          )}
        </div>
      </div>
    )
  }
}

export default Path;