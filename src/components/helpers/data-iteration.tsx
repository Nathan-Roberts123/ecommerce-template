import React from "react";

interface DataIterationProps {
  data: any[];
  startLength: number;
  endLength: number;
  children: any;
}

function DataIteration(props: DataIterationProps) {
  const { data = [], startLength, endLength, children } = props;

  return (
    <>
      {data &&
        data.length >= endLength &&
        data
          .slice(startLength, endLength)
          .map((value: any) => children({ data: value }))}
    </>
  );
}

export default DataIteration;
