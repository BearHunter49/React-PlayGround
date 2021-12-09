import * as React from "react";
import { useState } from "react";

const data1 = [
  {
    id: 1,
    key: 1,
    name: "서주원",
  },
  {
    id: 2,
    key: 2,
    name: "김환진",
  },
];

const data2 = [
  {
    id: 3,
    key: 3,
    name: "유수영",
  },
  {
    id: 4,
    key: 4,
    name: "조명하",
  },
];

type Props = {};
export const Key = (props: Props) => {
  const [data, setData] = useState(data1);
  const [trigger, setTrigger] = useState<boolean>(false);
  const [clickedId, setClickedId] = useState<number | undefined>(undefined);

  return (
    <div>
      <button
        onClick={() => {
          if (trigger) {
            setData(data2);
          } else {
            setData(data1);
          }
          setTrigger((prevState) => !prevState);
        }}
      >
        Convert Item
      </button>
      {data.map(({ id, name, key }, index) => {
        return (
          <div
            key={key}
            className={clickedId === id ? "go_anim" : "stop_anim"}
            onClick={() => {
              if (clickedId === id) {
                setClickedId(undefined);
              } else {
                setClickedId(id);
              }
            }}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};
