// @flow
import * as React from "react";
import { useEffect, useState } from "react";

type Props = {};
export const UseEffect = (props: Props) => {
  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    console.log("first renderedd!!!");

    return () => {
      console.log("destroyed: first rendered");
    };
  }, []);

  // useEffect(() => {
  //   console.log("rendered by trigger");
  //   return () => {
  //     console.log("destroyed: rendered by trigger");
  //   };
  // }, [trigger]);

  return (
    <div>
      <button
        onClick={() => {
          setTrigger((prevState) => !prevState);
        }}
      >
        Do Render
      </button>
    </div>
  );
};
