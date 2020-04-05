import React, { useContext } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { Editor } from "../Editor/Editor";
import { Redirect, Route, Switch } from "react-router-dom";
import { Privacy } from "../../routes";
import styled from "styled-components";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex: 1;
`;
export const App = () => {
  const { authLoading } = useContext(AuthContext);
  return (
    <Wrapper>
      <AppHeader />
      <Main>
        {authLoading ? (
          <div>Loading</div>
        ) : (
          <Switch>
            <Route path="/" exact component={Editor} />
            <Route path="/privacy" exact component={Privacy} />
            <Route
              path="*"
              render={() => (
                <Redirect
                  to={{
                    pathname: "/",
                  }}
                />
              )}
            />
          </Switch>
        )}
      </Main>
    </Wrapper>
  );
};
