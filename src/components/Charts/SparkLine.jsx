import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = (props) => {
  return (
    <div>
      <span>Sparkline</span>
      <SparklineComponent
        id={props?.id}
        height={props?.height}
        width={props?.width}
        lineWidth={1}
        valueType={"Numeric"}
        fill={props?.color}
        border={{ color: props?.currentColor, width: 2 }}
        dataSource={props?.data}
        xName="x"
        yName="yval"
        type={props?.type}
        tooltipSettings={{
          visible: true,
          format: "${x} : data ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  );
};

export default SparkLine;
