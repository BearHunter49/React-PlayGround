import * as React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};
export const Main = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button
        onClick={() => {
          navigate("/basic");
        }}
      >
        기본 랜더링
      </button>

      <button
        onClick={() => {
          navigate("/set-state");
        }}
      >
        setState 랜더링 시점
      </button>
      <button
        onClick={() => {
          navigate("/compare");
        }}
      >
        얕은/깊은 비교
      </button>
      <button
        onClick={() => {
          navigate("/memo");
        }}
      >
        Memo
      </button>
      <button
        onClick={() => {
          navigate("/key");
        }}
      >
        Key
      </button>
      <button
        onClick={() => {
          navigate("/use-effect");
        }}
      >
        useEffect
      </button>
      <button
        onClick={() => {
          navigate("/window-event");
        }}
      >
        window event listener with state
      </button>
    </div>
  );
};
