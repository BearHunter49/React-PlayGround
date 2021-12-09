import * as React from "react";
import { memo, useEffect } from "react";

type Props = {
  id: number;
  someObject: {
    age: number;
    name: string;
    subObject: {
      good: boolean;
      bad: boolean;
    };
  };
};
export const SubMemo = ({ id, someObject }: Props) => {
  useEffect(() => {
    console.log(someObject.name);
  }, []);

  return (
    <div>
      <div>{id}</div>
      <div>{someObject.age}</div>
      <div style={{ color: id === 1 ? "cyan" : "" }}>{someObject.name}</div>
      <div>{someObject.subObject.good.toString()}</div>
      <div>{someObject.subObject.bad.toString()}</div>
      <div style={{ width: "100%", height: 2, backgroundColor: "black" }} />
    </div>
  );
};

// export const SubMemo = memo(({ id, someObject }: Props) => {
//   return (
//     <div>
//       <div>{id}</div>
//       <div>{someObject.age}</div>
//       <div>{someObject.name}</div>
//       <div>{someObject.subObject.good.toString()}</div>
//       <div>{someObject.subObject.bad.toString()}</div>
//       <div style={{ width: "100%", height: 2, backgroundColor: "black" }} />
//     </div>
//   );
// });
