import React, { Component } from "react";
import { connect } from 'react-redux';
import { Chart, Geom, Axis, Tooltip } from "bizcharts";

const cols = {
  day: {
    alias: "日期"
  },
  num: {
    alias: "完成数"
  }
};

class Recent extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="recent-wrapper">
        <h2>近7天数据</h2>
        <Chart
          height={200}
          data={data}
          scale={cols}
          padding={[20, 30, 50, 40]}
          style={{ paddingLeft: 40 }}
          forceFit
        >
          <Axis
            name="day"
            title={null}
            tickLine={null}
          />
          <Axis
            name="num"
            line={false}
            tickLine={null}
            grid={null}
            title={null}
          />
          <Tooltip />
          <Geom
            type="area"
            position="day*num"
            size={1}
            color="#975FE4"
            shape="smooth"
          />
        </Chart>
      </div>
    );
  }
}

const mapState = state => ({
  data: state.getIn(["user", "dataCenter", "recent"])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Recent);
