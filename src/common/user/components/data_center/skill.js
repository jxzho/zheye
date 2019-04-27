import * as React from "react";
import { connect } from "react-redux";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  Guide
} from "bizcharts";
import DataSet from "@antv/data-set";

class Skill extends React.Component {
  render() {
    const { detail = [], total } = this.props;
    const { DataView } = DataSet;
    const { Html } = Guide;
    const dv = new DataView();
    dv.source(detail).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100;
          return `${val.toFixed(2)}%`;
        }
      }
    };

    return (
      <div className="skill-wrapper">
        <h2>各项详细</h2>
        <Chart
          height={400}
          data={dv}
          scale={cols}
          padding={[80, 100, 80, 80]}
          forceFit
        >
          <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
          <Axis name="percent" />
          <Legend position="right" offsetY={-300 / 2 + 120} offsetX={-100} />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Guide>
            <Html
              position={["50%", "50%"]}
              html={`<div style="color:#8c8c8c;font-size:13px;text-align: center;width: 10em;">Total<br><span style="color:#262626;font-size:13px">${total}</span></div>`}
              alignX="middle"
              alignY="middle"
            />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                const find = detail.find(fItem => fItem.item === item);
                return {
                  name: item,
                  value: find.count
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return val;
              }}
            />
          </Geom>
        </Chart>
      </div>
    );
  }
}

const mapState = state => ({
  detail: state.getIn(["user", "dataCenter", "detail", "list"]),
  total: state.getIn(["user", "dataCenter", "detail", "total"])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Skill);
