import React, { useEffect, useRef } from "react";
import ReactQuill from "@wyrdathru/react-quill";
import "@wyrdathru/react-quill/dist/quill.snow.css";
import { usePersistedState } from "../../hooks";
import { API } from "aws-amplify";
import debounce from "lodash/debounce";
import useConstant from "use-constant";

function updateNote(id: string, content: string) {
  return API.put("notes", `/notes/${id}`, {
    body: { content },
  });
}
interface Props {
  id?: string;
  content: string;
  // onChange: (content: string) => void;
}

export const Editor: React.FC<Props> = ({ id, content }) => {
  const contenRef = useRef(content);

  const { state, setState } = usePersistedState(
    `LOGD_TEXT_${id ? id : "GUEST"}`,
    content
  );

  const handleUpdateNote = async () => {
    if (!id) {
      return;
    }
    try {
      await updateNote(id, state);
      contenRef.current = state;
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const debouncedUpdate = useConstant(() =>
    debounce(handleUpdateNote, 500, { trailing: true })
  );

  useEffect(() => {
    if (id && state !== contenRef.current) {
      debouncedUpdate();
    }
  }, [state, id, contenRef, debouncedUpdate]);

  useEffect(() => {
    if (id && state !== contenRef.current) {
      debouncedUpdate();
    }
  }, [state, id, contenRef, debouncedUpdate]);

  return (
    <ReactQuill
      value={state}
      onChange={setState}
      placeholder={"Add notes..."}
    />
  );
};
