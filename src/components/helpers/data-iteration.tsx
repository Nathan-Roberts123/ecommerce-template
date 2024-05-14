import React from "react";
import { type TProduct } from "~/types";

interface DataIterationProps {
  data: TProduct[] | [];
  startLength: number;
  endLength: number;
  children: ({ data }: { data: TProduct }) => void;
}

function DataIteration(props: DataIterationProps) {
  const { data = [], startLength, endLength, children } = props;

  return (
    <>
      {data &&
        data.length >= endLength &&
        data
          .slice(startLength, endLength)
          .map((value) => children({ data: value }))}
    </>
  );
}

export default DataIteration;
