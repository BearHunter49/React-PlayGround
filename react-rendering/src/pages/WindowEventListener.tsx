import * as React from "react";
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { makeVar, useReactiveVar } from "@apollo/client";

const mouseDownEventOutSide = () => {
  console.log(`mouse Down!!`);
};

const countVar = makeVar<number>(0);

type Props = {};
export const WindowEventListener = (props: Props) => {
  const [count, setCount] = useState<number>(0);
  // const myCount = useReactiveVar(countVar)
  // const countRef = useRef<number>(0);

  // const [countFunc, setCountFunc] = useState<() => number>(() => {
  //   return 0;
  // });

  // const [countReducer, setCountReducer] = useReducer((prev: number) => {
  //   console.log("reduced!");
  //   return prev + 1;
  // }, 0);
  const [countObjectFunc, setCountObjectFunc] = useState<{
    setFunc: () => number;
  }>({
    setFunc: () => 0,
  });

  const mouseDownEvent = () => {
    // console.log(`mouse Down!! count: ${count}`);
    // console.log(`mouse Down!! countVar(): ${countVar()}`);
    // console.log(`mouse Down!! countRef: ${countRef.current}`);
    // console.log(`mouse Down!! countFunc: ${countFunc}`);
    // console.log(`mouse Down!! countReducer: ${countReducer}`);
    console.log(`mouse Down!! countObjectFunc: ${countObjectFunc.setFunc()}`);

    // setCount(count + 1);
    // setCount((prev) => prev + 1);
    // countVar(countVar() + 1);
    // countRef.current = countRef.current + 1;
    // setCount(countRef.current + 1);
    // setCountFunc(() => {
    //   return 1;
    // });
    // setCountReducer(countReducer + 1);
    setCountObjectFunc({
      setFunc: () => {
        return countObjectFunc.setFunc() + 1;
      },
    });
  };

  // const mouseDownEventWithUseCallback = useCallback(() => {
  //   setCount(count + 1);
  //   console.log(`mouse Down!! count: ${count}`);
  // }, [count]);

  // console.log(`count: ${count}`);
  // console.log(`countVar: ${myCount}`);
  // console.log(`countRef: ${countRef.current}`);
  // console.log(`countFunc: ${countFunc}`);
  // console.log(`countReducer: ${countReducer}`);
  console.log(`countObjectFunc: ${countObjectFunc.setFunc()}`);

  // useEffect(() => {
  //   countRef.current += 1;
  // }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          // setCount(count + 1);
          //   countVar(myCount + 1)
        }}
      >
        Do Render with Count Up
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
