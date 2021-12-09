// @flow
import * as React from "react";
import { SubMemo } from "./SubMemo";
import { useState } from "react";

type Props = {};

export const Memo = (props: Props) => {
  const [trigger, setTrigger] = useState<boolean>(false);

  const [testData, setTestData] = useState([
    {
      testId: 1,
      testObject: {
        age: 27,
        name: "서주원",
        subObject: {
          good: true,
          bad: true,
        },
      },
    },
    {
      testId: 2,
      testObject: {
        age: 28,
        name: "김환진",
        subObject: {
          good: true,
          bad: true,
        },
      },
    },
    {
      testId: 3,
      testObject: {
        age: 22,
        name: "유수영",
        subObject: {
          good: true,
          bad: true,
        },
      },
    },
    {
      testId: 4,
      testObject: {
        age: 22,
        name: "조명하",
        subObject: {
          good: true,
          bad: true,
        },
      },
    },
  ]);

  console.log("rendeeeeeeringggg");

  return (
    <div>
      <button
        onClick={() => {
          // testData[0].testObject.subObject.good = false;

          // testData[0].testObject.age = 5;

          // setTestData(Array.from(testData));

          // testData.push({
          //   testId: 1,
          //   testObject: {
          //     age: 100,
          //     name: "goodman",
          //     subObject: {
          //       good: true,
          //       bad: false,
          //     },
          //   },
          // });
          // setTestData(testData);

          setTestData([
            {
              testId: 10,
              testObject: {
                age: 100,
                name: "goodman",
                subObject: {
                  good: true,
                  bad: false,
                },
              },
            },
            ...testData,
          ]);

          setTrigger((prevState) => !prevState);
        }}
      >
        Do Render
      </button>

      {/*<SubMemo id={testData[0].testId} someObject={testData[0].testObject} />*/}

      {testData.map(({ testId, testObject }, index) => {
        return <SubMemo key={index} id={testId} someObject={testObject} />;
      })}
    </div>
  );
};
