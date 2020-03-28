import React, { useEffect, useState } from 'react';
import ReactQuill from "@wyrdathru/react-quill";
import "@wyrdathru/react-quill/dist/quill.snow.css";
import { usePersistedState } from '../hooks';

export function Editor() {
  const {state, setState} = usePersistedState("LOGD_TEXT", "");

  return (<ReactQuill value={state} onChange={setState} />);
}