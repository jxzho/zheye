import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Avatar, Button } from "antd";
import BraftEditor from "braft-editor";

const controls = ["undo", "redo", "separator", "text-color", "emoji", "code", "clear"];

class Detail extends PureComponent {
  state = {
    editorState: BraftEditor.createEditorState(null),
  }

  handleEditorChange = editorState => this.setState({ editorState });

  addComment = () => {
    const { editorState } = this.state;
    console.log(editorState.toHTML());
  };

  render() {
    const { info } = this.props;
    const { editorState } = this.state;
    return (
      <div className="add-comment-wrapper">
        <Avatar src={info.get("avatar")} />
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
  info: state.getIn(["user", "user", "info"])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Detail);
