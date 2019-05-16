import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./style.scss";
import { Steps, Button, message } from 'antd';
import WebBrief from "./components/Brief";
const Step = Steps.Step;

const steps = [
  {
    title: '第一步',
    content: 'First-content',
  },
  {
    title: '第二步',
    content: 'Second-content',
  },
  {
    title: '第三步',
    content: 'Last-content',
  },
  {
    title: '第4步',
    content: 'Last-content',
  },
  {
    title: '第5步',
    content: 'Last-content',
  },
  {
    title: '第6步',
    content: 'Last-content',
  },
];

class LearnRoute extends PureComponent {
  state = {
    current: 0,
  };

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className="learn-route-panel">
        <WebBrief />
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

export default connect(
  mapState,
  mapDispatch
)(LearnRoute);
