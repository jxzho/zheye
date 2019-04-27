import React, { Component } from "react";
import { Progress } from "antd";

class PassRate extends Component {
  render() {
    return (
      <div className="pass-rate-wrapper">
        <h2 className="title">通过率</h2>
        <div className="pass-rate-area">
          <div className="item">
            <span className="label">JAVASCRIPT</span>
            <Progress type="circle" percent={12} width={80} />
          </div>
          <div className="item">
            <span className="label">CSS</span>
            <Progress type="circle" percent={60} width={80} />
          </div>
          <div className="item">
            <span className="label">HTML</span>
            <Progress type="circle" percent={0} width={80} />
          </div>
          <div className="item">
            <span className="label">VUE</span>
            <Progress type="circle" percent={0} width={80} />
          </div>
          <div className="item">
            <span className="label">REACT</span>
            <Progress type="circle" percent={0} width={80} />
          </div>
        </div>
      </div>
    );
  }
}

export default PassRate;
