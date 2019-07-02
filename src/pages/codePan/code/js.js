import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Menu, Dropdown, Icon } from "antd";
import ResizerLine from "../components/resizer-line";
import CodeMirror from "react-codemirror";
import "../../../../node_modules/codemirror/addon/selection/active-line.js";
import "../../../../node_modules/codemirror/mode/javascript/javascript";
import "../../../../node_modules/codemirror/addon/fold/foldcode.js";
import "../../../../node_modules/codemirror/addon/fold/foldgutter.js";
import "../../../../node_modules/codemirror/addon/fold/brace-fold.js";
import "../../../../node_modules/codemirror/addon/scroll/simplescrollbars.js";
import "../../../../node_modules/codemirror/addon/fold/foldgutter.css";
import "../../../../node_modules/codemirror/addon/scroll/simplescrollbars.css";
import "../../../../node_modules/codemirror/addon/edit/closebrackets.js";
import "../../../../node_modules/codemirror/addon/edit/matchbrackets";

const menu = (
  <Menu>
    <Menu.Item>
      <a href="javascript:void(0)" >
        javascript
      </a>
    </Menu.Item>
  </Menu>
);

class CodeJS extends PureComponent {
  state = {
    value: ''
  }

  handleOnChange = (value) => {
    const { changeJSCode } = this.props;
    changeJSCode(value);
  }

  componentWillMount() {
    this.setState({
      value: this.props.jsCode
    });
  }

  render() {
    const { invisible } = this.props;
    const { value } = this.state;
    return (
      <div className="code-js" style={{ display: invisible ? 'block' : 'none' }}>
        <header className="code-header">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              JavaScript <Icon type="down" />
            </a>
          </Dropdown>
        </header>
        <CodeMirror
          value={value}
          onChange={this.handleOnChange}
          options={{
            mode: "javascript",
            lineNumbers: true,
            styleActiveLine: true, // 当前激活行
            lineWrapping: true,
            foldGutter: true, // 允许在行号位置折叠
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            scrollbarStyle: "simple",
            autoCloseBrackets: true, // 中括号补全
            matchBrackets: true, // 匹配符号
          }}
        />
        <ResizerLine lan="js" />
      </div>
    )
  }
}

const mapState = state => ({
  jsCode: state.getIn(['codePan', 'jsCode'])
});

const mapDispatch = dispatch => ({
  changeJSCode: (code) => dispatch(actionCreators.changeJSCode(code)),
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(CodeJS));