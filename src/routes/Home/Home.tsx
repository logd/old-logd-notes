import React, { useContext } from "react";
import { Page, Centered, Spinner } from "../../components";
import { AuthContext } from "../../providers";

export const Home = () => {
  const { authLoading } = useContext(AuthContext);

  return (
    <Page>
      {authLoading ? (
        <Centered>
          <Spinner />
        </Centered>
      ) : (
        <>HomePage</>
      )}
    </Page>
  );
};
