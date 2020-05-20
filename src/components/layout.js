import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';

import Header from './header';
import Footer from './footer';
import theme from './styled/theme';
import '../styles/styles.scss';

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
