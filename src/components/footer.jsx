import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../utils/mediaQueries.ts';
import { Container } from './styled/container.ts';
import { UL, LI } from './styled/list.ts';
import { H3, P, NavClickLink } from './styled/type.tsx';

const propTypes = {
    page: PropTypes.string,
};

const Wrapper = styled.footer`
    padding-top: 60px;
    background: #3434ff;
    color: #f8f8fb;
    border-top: 2px solid #1f364d;

    ${media.tablet} {
        padding-top: 100px;
    }
`;

const Content = styled.div`
    padding-bottom: 50px;
    display: flex;
    justify-content: space-evenly;
`;

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <Wrapper>
            <Container marginLeftAuto>
                <Content>
                    <div className="contact-info">
                        <H3 uppercase>contact</H3>
                        <P>Digitalinnerprize @gmail.com</P>
                        <div className="copyright">
                            <P>{year} &copy; Digital Innerprize Llc </P>
                        </div>
                    </div>
                    <div className="socials">
                        <H3 uppercase>follow us</H3>
                        <UL column className="social-links">
                            <LI>
                                <NavClickLink capitalize href="#">
                                    facebook
                                </NavClickLink>
                            </LI>
                            <LI>
                                <NavClickLink capitalize href="#">
                                    instagram
                                </NavClickLink>
                            </LI>
                        </UL>
                    </div>
                </Content>
            </Container>
        </Wrapper>
    );
};

Footer.propTypes = propTypes;

export default Footer;
