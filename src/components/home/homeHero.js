import React from 'react';
import styled from 'styled-components';
import { useSpring, animated as a } from 'react-spring';
import { Link } from 'gatsby';
import { Flex, FlexItem } from '../styled/flexBox';
import { ButtonPrimary } from '../styled/button.tsx';
import { H1, P } from '../styled/type';
import animatedJson from '../../images/animated/online-buy-products-animated.json';
import AnimatedImage from '../animateImage';

const Div = styled(a.div)`
    padding-top: ${props => props.theme.spacing.vertical['xlAlt']};
    padding-bottom: ${props => props.theme.spacing.vertical['xl']};
`;

const HomeHero = () => {
    const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

    return (
        <section className="home-hero">
            <div className="container">
                <Flex>
                    <FlexItem alignCenter>
                        <Div style={fade}>
                            <H1 marginBottom="0" capitalize>
                                digital innerprize
                            </H1>
                            <P marginTop="lg" size="h3">
                                We believe both smart businesses and entrepreneurs must fully embrace modern ways of
                                reaching out to their customers in order to succeed in today's crowded marketplace.
                            </P>
                            <Link to="/contact">
                                <ButtonPrimary>Grow your brand</ButtonPrimary>
                            </Link>
                        </Div>
                    </FlexItem>
                    <FlexItem>
                        <div className="home-hero-image">
                            <AnimatedImage animatedJson={animatedJson} width={800} height={675} />
                        </div>
                    </FlexItem>
                </Flex>
            </div>
        </section>
    );
};

export default HomeHero;
