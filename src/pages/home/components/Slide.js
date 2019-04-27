import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Carousel } from "antd";

class Writer extends PureComponent {
  render() {
    return (
      <Carousel>
        {this.props.list.map(item => (
          <div className="img" key={item.get('id')}>
            <img src={item.get('url')} alt="slide" />
          </div>
        ))}
      </Carousel>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "slideList"])
});

const mapDispatch = null;

export default connect(
  mapState,
  mapDispatch
)(Writer);
