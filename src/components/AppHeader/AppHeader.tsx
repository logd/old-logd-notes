import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding: 1em;
`;

const Brand = styled.div`
    font-size: .9em;
    font-weight: 100;
    color: #c9d6df;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;

const Main = styled.div`
    flex: 1;
`;
export const AppHeader = () => <Wrapper>
    <Main><Brand>logd</Brand></Main>
    {/* <div>Login</div> */}
</Wrapper>