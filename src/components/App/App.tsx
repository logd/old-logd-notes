import React from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { Editor } from "../Editor/Editor";
import { Redirect, Route, Switch } from "react-router-dom";
import { Privacy } from "../../routes";
import styled from "styled-components";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex: 1;
`;
export const App = () => (
  <Wrapper>
    <AppHeader />
    <Main>
      <Switch>
        <PrivateRoute path="/" component={Editor} />
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
    </Main>
  </Wrapper>
);
