import React from 'react';
import styled from 'styled-components';
import { useSpring, animated as a } from 'react-spring';
import { Link } from 'gatsby';
import { Flex, FlexItem } from '../styled/flexBox.ts';
import { ButtonPrimary, ButtonText } from '../styled/button.tsx';
import { H1, P } from '../styled/type.tsx';
import { media } from '../../utils/mediaQueries.ts';
import { useBreakpoint } from '../../context/breakpoint.tsx';

import animatedJson from '../../images/animated/management-animated-illustration.json';
import AnimatedImage from '../animateImage';

const Div = styled(a.div)`
    padding-top: ${props => props.theme.spacing.vertical['xlAlt']};
    padding-bottom: ${props => props.theme.spacing.vertical['xl']};
    ${media.custom('max', 922)} {
        text-align: center;
        margin: 0 auto;
        max-width: 90%;
        padding-bottom: ${props => props.theme.spacing.vertical['0']};
    }
`;

const HomeHero = () => {
    const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });
    const breakpoint = useBreakpoint();

    return (
        <section className="home-hero">
            <div className="container">
                <Flex columnMobile>
                    <FlexItem
                        alignCenter
                        textLeft={breakpoint.tablet}
                        paddingLeft={breakpoint.mobile ? 'lg' : 'md'}
                        paddingRight={breakpoint.mobile ? 'lg' : 'md'}
                    >
                        <Div style={fade}>
                            <H1 marginBottom="0" capitalize fontWeight={700}>
                                We help grow brands
                            </H1>
                            <P marginTop="md" color="gray2" borderLeft={breakpoint.tablet}>
                                We believe both smart businesses and entrepreneurs must fully embrace modern ways of
                                reaching out to their customers in order to succeed in today's crowded marketplace.
                            </P>
                            <Link to="/contact">
                                <ButtonPrimary includeBtnText>
                                    <ButtonText fontWeight="bold">Grow your brand</ButtonText>
                                </ButtonPrimary>
                            </Link>
                        </Div>
                    </FlexItem>
                    <FlexItem>
                        <div>
                            <AnimatedImage
                                animatedJson={animatedJson}
                                width={breakpoint.tablet && 800}
                                height={breakpoint.tablet ? 675 : 525}
                            />
                        </div>
                    </FlexItem>
                </Flex>
            </div>
        </section>
    );
};

export default HomeHero;
