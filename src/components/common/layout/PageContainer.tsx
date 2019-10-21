import React from 'react';
import Head from 'next/head';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Theme from './Theme';

interface Props {
    children: JSX.Element;
}

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    body{
        margin:0;
        height:100%;
        width:100%;
        padding:0;
        position:relative;
    }
`;

const StyledPageContainer = styled.div`
    width:100%;
    margin: auto;
    position:relative;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased
`;

const PageContainer: React.FunctionComponent<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>CockFight Manager</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                    key='viewport'
                />
            </Head>
            <ThemeProvider theme={Theme}>
                <>
                    <GlobalStyle />
                    {/** <Menu> */}
                    <StyledPageContainer>
                        {children}
                    </StyledPageContainer>
                    {/** <Futer> */}
                </>
            </ThemeProvider>
        </>
    );
};

export default PageContainer;
