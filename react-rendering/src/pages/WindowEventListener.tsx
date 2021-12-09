// @flow
import * as React from "react";
import { useCallback, useMemo, useState } from "react";

const mouseDownEvent2 = () => {
  console.log(`mouse Down!!`);
};

type Props = {};
export const WindowEventListener = (props: Props) => {
  const [count, setCount] = useState<number>(0);

  const mouseDownEvent = () => {
    setCount(count + 1);
    console.log(`mouse Down!! count: ${count}`);
  };

  // const mouseDownEvent = useCallback(() => {
  //   setCount(count + 1);
  //   console.log(`mouse Down!! count: ${count}`);
  // }, []);

  console.log(`count: ${count}`);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Do Render & Count Up
      </button>
      <button
        onClick={() => {
          window.addEventListener("mousedown", mouseDownEvent);
        }}
      >
        Window add Event Listener
      </button>
      <button
        onClick={() => {
          window.removeEventListener("mousedown", mouseDownEvent);
        }}
      >
        Window remove Event Listener
      </button>
    </div>
  );
};
