import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Header from './header';
import Footer from './footer';
import theme from './styled/theme';
import '../styles/styles.scss';

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
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
