import * as React from "react";
import { useState } from "react";

type Props = {};
export const Basic = (props: Props) => {
  const [data, setData] = useState({
    id: 1,
    name: "서주원",
  });

  return (
    <div>
      <button
        onClick={() => {
          // setData({
          //   id: 2,
          //   name: "서주원2",
          // });
          // data.id = 100;
          // data.name = "김환진";
          // setData(data);
        }}
      >
        Button
      </button>
      <div>{data.id}</div>
      <div>{data.name}</div>
    </div>
  );
};
