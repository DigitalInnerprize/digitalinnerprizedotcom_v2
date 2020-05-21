import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../utils/mediaQueries.ts';
import { useBreakpoint } from '../context/breakpoint.tsx';
import { Container } from './styled/container.ts';
import { Flex, FlexItem } from './styled/flexBox.ts';
import { UL, LI } from './styled/list.ts';
import { H3, P, NavClickLink } from './styled/type.tsx';

const propTypes = {
    page: PropTypes.string,
};

const Wrapper = styled.footer`
    padding-top: 50px;
    background: ${props => props.theme.colors['lightBlue']};
    color: #f8f8fb;

    ${media.custom('min', 922)} {
        padding-top: 85px;
    }
`;

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    const breakpoint = useBreakpoint();

    return (
        <Wrapper>
            <Container marginLeftAuto>
                <Flex columnMobile justifyEvenly>
                    <FlexItem order={breakpoint.maxTablet && 1}>
                        {breakpoint.tablet && (
                            <H3 uppercase color="white">
                                contact
                            </H3>
                        )}
                        <P marginTop="0">Digitalinnerprize @gmail.com</P>
                        <P marginTop="0">{year} &copy; Digital Innerprize Llc </P>
                    </FlexItem>
                    <FlexItem>
                        {breakpoint.tablet && (
                            <H3 uppercase color="white">
                                follow us
                            </H3>
                        )}
                        <UL column={breakpoint.tablet} center>
                            <LI marginRight={breakpoint.mobile && 'lg'}>
                                <NavClickLink capitalize href="#">
                                    facebook
                                </NavClickLink>
                            </LI>
                            <LI marginLeft={breakpoint.mobile && 'lg'}>
                                <NavClickLink capitalize href="#">
                                    instagram
                                </NavClickLink>
                            </LI>
                        </UL>
                    </FlexItem>
                </Flex>
            </Container>
        </Wrapper>
    );
};

Footer.propTypes = propTypes;

export default Footer;
