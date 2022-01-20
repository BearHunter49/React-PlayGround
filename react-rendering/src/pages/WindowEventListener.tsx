import * as React from "react";
import {
    ReducerWithoutAction,
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

  const [countFunc, setCountFunc] = useState<() => number>(() => () => {
    return 0;
  });

  // const [countState, setCountState] = useReducer((prevState: number, nextState: number) => {
  //     return prevState + 1
  // }, 0, () => {
  //     return 1
  // });

    const mouseDownEvent = () => {
    // console.log(`mouse Down!! count: ${count}`);
    // console.log(`mouse Down!! countVar(): ${countVar()}`);
    // console.log(`mouse Down!! countRef: ${countRef.current}`);
    // console.log(`mouse Down!! countFunc: ${countFunc}`);
    // console.log(`mouse Down!! countState: ${countState}`);

    // setCount(count + 1);
    // countVar(countVar() + 1);
    // countRef.current = countRef.current + 1;
    // setCount(countRef.current + 1);
        // setCount((prev) => prev + 1);
    // setCountFunc(() => {
    //   return 1;
    // });
    // setCountState(90)
  };


  // const mouseDownEventWithUseCallback = useCallback(() => {
  //   setCount(count + 1);
  //   console.log(`mouse Down!! count: ${count}`);
  // }, [count]);

  // console.log(`count: ${count}`);
  // console.log(`countVar: ${myCount}`);
  // console.log(`countRef: ${countRef.current}`);
  // console.log(`countFunc: ${countFunc()}`);
  // console.log(`countState: ${countState}`);

  // useEffect(() => {
  //   countRef.current += 1;
  // }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          // setCount(count + 1);
          //   countVar(myCount + 1)
          //   dispatch(2)
            setCountFunc((prev) => () => {
                return prev() + 1
            })
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
