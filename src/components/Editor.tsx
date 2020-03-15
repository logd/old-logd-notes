import React, { useEffect, useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function usePersistedState(key: string, defaultValue = "") {
  const [state, setState] = useState<string>(
    localStorage.getItem(key) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);
  return {state, setState};
}

export function Editor() {
  const {state, setState} = usePersistedState("LOGD_TEXT", "");

  return (
    <div className="editor">
    <ReactQuill
      theme="snow"
      value={state as string}
      onChange={(value: string) => setState(value)}
      placeholder={"Write something..."}
    />
  </div>
  );
}