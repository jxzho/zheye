import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Menu, Dropdown, Icon } from "antd";
import ResizerLine from "../components/resizer-line";
import CodeMirror from "react-codemirror";
import "../../../../node_modules/codemirror/mode/xml/xml";
import "../../../../node_modules/codemirror/addon/selection/active-line.js";
import "../../../../node_modules/codemirror/addon/edit/closetag";
import "../../../../node_modules/codemirror/addon/edit/matchbrackets";
import "../../../../node_modules/codemirror/addon/edit/matchtags";
import "../../../../node_modules/codemirror/addon/scroll/simplescrollbars.js";
import "../../../../node_modules/codemirror/addon/scroll/simplescrollbars.css";
import "../../../../node_modules/codemirror/addon/fold/foldcode.js";
import "../../../../node_modules/codemirror/addon/fold/foldgutter.js";
import "../../../../node_modules/codemirror/addon/fold/foldgutter.css";

const menu = (
  <Menu>
    <Menu.Item>
      <a href="javascript:void(0)" >
        html
      </a>
    </Menu.Item>
  </Menu>
);

class CodeHTML extends PureComponent {
  state = {
    value: ''
  }

  handleOnChange = (value) => {
    const { changeHTMLCode } = this.props;
    changeHTMLCode(value);
  }

  componentWillMount() {
    this.setState({
      value: this.props.htmlCode
    });
  }

  render() {
    const { controlWidth, invisible } = this.props;
    const { value } = this.state;
    return (
      <div className="code-html" style={{ display: invisible ? 'block' : 'none' }}>
        <header className="code-header">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              HTML <Icon type="down" />
            </a>
          </Dropdown>
        </header>
        <CodeMirror
          value={value}
          onChange={this.handleOnChange}
          options={{
            mode: "xml",
            lineNumbers: true,
            htmlMode: true,
            lineWrapping: true,
            styleActiveLine: true, // 当前激活行
            autoCloseTags: true, // 标签补全
            matchBrackets: true, // 匹配符号
            matchTags: {bothTags: true},
            scrollbarStyle: "simple",
            foldGutter: true, // 允许在行号位置折叠
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          }}
        />
        <ResizerLine lan="html" />
      </div>
    )
  }
}

const mapState = state => ({
  htmlCode: state.getIn(['codePan', 'htmlCode'])
});

const mapDispatch = dispatch => ({
  changeHTMLCode: (code) => dispatch(actionCreators.changeHTMLCode(code)),
});

export default connect(
  mapState,
  mapDispatch
)(withRouter(CodeHTML));