import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';

import Header from './header';
import Footer from './footer';
import theme from './styled/theme';
import '../styles/styles.scss';

//TODO: update WhatWeDo link to dropdown and add the multiple services for routes to hit on SEO

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Fragment>
                <Header />
                <main>{children}</main>
                <Footer />
            </Fragment>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
