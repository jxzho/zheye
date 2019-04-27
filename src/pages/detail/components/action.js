import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Button, Tooltip } from "antd";
import { actionCreators as action } from "../store";
const ButtonGroup = Button.Group;

class Action extends PureComponent {
  state = {
    isCollect: 0,
    isLike: 0
  };

  collectThis = () => {
    const { isCollect } = this.state;
    const { user, article, collectArticle } = this.props;
    const status = isCollect ? isCollect - 1 : isCollect + 1;
    collectArticle({
      userId: user.get('id'),
      articleId: article.id,
      status
    });
    this.setState({
      isCollect: status
    });
  };

  likeThis = () => {
    const { isLike } = this.state;
    const status = isLike ? isLike - 1 : isLike + 1;
    this.setState({
      isLike: status
    });
  }

  render() {
    return (
      <div className="article-action-wrapper">
        <ButtonGroup>
          <Tooltip title="收藏">
            <Button
              type={this.state.isCollect ? "primary" : "default"}
              icon="star"
              size="small"
              onClick={this.collectThis}
            />
          </Tooltip>
          <Tooltip title="点赞">
            <Button
              type={this.state.isLike ? "primary" : "default"}
              icon="like"
              size="small"
              onClick={this.likeThis}
            />
          </Tooltip>
        </ButtonGroup>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.getIn(["user", "user"]),
  article: state.getIn(["detail", "article"])
});

const mapDispatch = dispatch => ({
  collectArticle: data => dispatch(action.collectArticle(data))
});

export default connect(
  mapState,
  mapDispatch
)(Action);
