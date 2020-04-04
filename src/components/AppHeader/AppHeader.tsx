import React from 'react';
import styled from 'styled-components';

const theme = `
    font-size: .9em;
    font-weight: 100;
    color: #c9d6df;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 1em;
    ${theme};
`;

const Smaller = styled.div`
    font-size: smaller;
`;

const Main = styled.div`
    flex: 1;
`;
export const AppHeader = () => <Wrapper>
    <Main>logd</Main>
    <Smaller>Quick personal notes, saved locally only.</Smaller>
</Wrapper>