// @flow
import * as React from "react";
import { useState } from "react";

type Props = {};
export const Compare = (props: Props) => {
  const [data, setData] = useState({
    id: 1,
    name: "서주원",
  });

  const numberA = 1;

  const objectA = {
    id: 1,
    name: "man",
  };
  const objectB = {
    id: 1,
    name: "man",
  };

  const result = JSON.stringify(objectA) === JSON.stringify(objectB);

  console.log("rendeeeered!!!");

  return (
    <div>
      <button
        onClick={() => {
          // data.name = "김환진";
          // setData(data);
          //
          // console.log(data);
          // setData({
          //   id: 1,
          //   name: "서주원",
          // });
        }}
      >
        Do Render
      </button>
      <div>{result.toString()}</div>
    </div>
  );
};
