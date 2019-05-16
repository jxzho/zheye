import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Avatar, Button, message } from "antd";
import BraftEditor from "braft-editor";
import api from '../../../api';

const controls = ["undo", "redo", "separator", "text-color", "emoji", "code", "clear"];

class Comment extends PureComponent {
  state = {
    editorState: BraftEditor.createEditorState(null),
  }

  handleEditorChange = editorState => this.setState({ editorState });

  addComment = () => {
    const { editorState } = this.state;
    const { info, problemId } = this.props;
    api.addProblemComment({
      userId: info.get("id"),
      problemId: problemId,
      content: editorState.toHTML()
    }).then(res => {
      const data = res.data;
      if (data.result) {
        message.success("添加评论成功！");
      } else {
        message.error("添加评论失败！");
      }
    });
  };

  render() {
    const { info } = this.props;
    const { editorState } = this.state;
    return (
      <div className="add-comment-wrapper">
        <div className="action">
          <BraftEditor
            value={editorState}
            onChange={this.handleEditorChange}
            controls={controls}
          />
          <Button type="primary" onClick={this.addComment}>添加评论</Button>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  info: state.getIn(["user", "user", "info"]),
  detail: state.getIn(["detail", "article"])
});

const mapDispatch = dispatch => ({
  getDetail: id => dispatch(actionCreators.getDetail(id))
});

export default connect(
  mapState,
  mapDispatch
)(Comment);