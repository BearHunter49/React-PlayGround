import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Basic } from "./pages/Basic";
import { Compare } from "./pages/Compare";
import { Memo } from "./pages/Memo";
import { SetState } from "./pages/SetState";
import { UseEffect } from "./pages/UseEffect";
import { WindowEventListener } from "./pages/WindowEventListener";
import { Key } from "./pages/Key";

type Props = {};
export const MainRouter = (props: Props) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/set-state" element={<SetState />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/key" element={<Key />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/window-event" element={<WindowEventListener />} />
      </Routes>
    </HashRouter>
  );
};
