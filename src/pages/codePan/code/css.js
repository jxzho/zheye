import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Menu, Dropdown, Icon } from "antd";
import ResizerLine from "../components/resizer-line";
import CodeMirror from "react-codemirror";
import "../../../../node_modules/codemirror/mode/css/css.js";
import "../../../../node_modules/codemirror/addon/selection/active-line.js";
import "../../../../node_modules/codemirror/addon/edit/closebrackets.js";
import "../../../../node_modules/codemirror/addon/edit/matchbrackets";
import "../../../../node_modules/codemirror/addon/scroll/simplescrollbars.js";
import "../../../../node_modules/codemirror/addon/scroll/simplescrollbars.css";
import "../../../../node_modules/codemirror/addon/fold/foldcode.js";
import "../../../../node_modules/codemirror/addon/fold/foldgutter.js";
import "../../../../node_modules/codemirror/addon/fold/foldgutter.css";

const menu = (
  <Menu>
    <Menu.Item>
      <a href="javascript:void(0)" >
        css
      </a>
    </Menu.Item>
  </Menu>
);

class CSS extends PureComponent {
  state = {
    value: ''
  }

  handleOnChange = (value) => {
    const { changeCssCode } = this.props;
    changeCssCode(value);
  }

  componentWillMount() {
    this.setState({
      value: this.props.cssCode
    });
  }

  render() {
    const { controlWidth, invisible } = this.props;
    const { value } = this.state;
    return (
      <div className="code-css" style={{ display: invisible ? 'block' : 'none' }}>
        <header className="code-header">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              CSS <Icon type="down" />
            </a>
          </Dropdown>
        </header>
        <CodeMirror
          value={value}
          onChange={this.handleOnChange}
          options={{
            mode: "css",
            lineNumbers: true, // 显示行
            lineWrapping: true,
            styleActiveLine: true, // 当前激活行
            autoCloseBrackets: true, // 中括号补全
            matchBrackets: true, // 匹配符号
            scrollbarStyle: "simple",
            foldGutter: true, // 允许在行号位置折叠
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          }}
        />
        <ResizerLine lan="css" />
      </div>
    )
  }
}

const mapState = state => ({
  cssCode: state.getIn(['codePan', 'cssCode'])
});

const mapDispatch = dispatch => ({
  changeCssCode: (code) => dispatch(actionCreators.changeCssCode(code)),
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(CSS));