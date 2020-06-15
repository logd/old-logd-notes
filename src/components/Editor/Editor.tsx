import React, { useContext } from "react";
import ReactQuill from "@wyrdathru/react-quill";
import "@wyrdathru/react-quill/dist/quill.snow.css";
import { usePersistedState } from "../../hooks";
import { Auth0Context } from "../../providers";

export function Editor() {
  const { state, setState } = usePersistedState("LOGD_TEXT", "");
  //  const { getTokenSilently } = useAuth0();
  const { getTokenSilently } = useContext(Auth0Context);

  const callApi = async () => {
    try {
      const token = await getTokenSilently();

      const response = await fetch("http://localhost:4000/authorized", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();
      console.log("responseData: ", responseData);

      // setShowResult(true);
      // setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={callApi}>PING</button>
      <ReactQuill
        value={state}
        onChange={setState}
        placeholder={
          "Start typing to add notes.  All content stored locally only."
        }
      />
    </div>
  );
}
