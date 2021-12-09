// @flow
import * as React from "react";
import { useState } from "react";

type Props = {};
export const SetState = (props: Props) => {
  const [one, setOne] = useState(1);
  const [two, setTwo] = useState(2);
  const [three, setThree] = useState(3);

  console.log("renderrred!!");

  return (
    <div>
      <button
        onClick={() => {
          setOne(one + 1);

          console.log(one);

          setTwo(two + 1);

          console.log(two);

          setThree(three + 1);

          console.log(three);
        }}
      >
        Do Render
      </button>
    </div>
  );
};
