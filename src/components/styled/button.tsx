import React from 'react';
import styled from 'styled-components';
import { fontSizer, transitionXs } from './mixins';
import is from 'typescript-styled-is';

type ButtonProps = {
    children: React.ReactNode;
    normal?: {
        color?: string;
        background?: string;
    };
    hover?: {
        color?: string;
        background?: string;
    };
    width?: string;
    size?: string;
    colorHover?: string;
    backgroundHover?: string;
    lowercase?: boolean;
    uppercase?: boolean;
    capitalize?: boolean;
};

type ButtonTextProps = {
    small?: boolean;
    fontWeight?: string | number;
};

type BBProps = {
    shortName?: string;
    tagline?: string;
};

export const Button = styled.button.attrs({
    color: props => (props.normal ? props.theme.colors[props.normal.color] : 'whiteAlt'),
    colorhover: props => (props.hover ? props.theme.colors[props.hover.color] : 'whiteAlt'),
    background: props => (props.normal ? props.theme.colors[props.normal.background] : 'primary'),
    backgroundhover: props => (props.hover ? props.theme.colors[props.hover.background] : 'blueAlt'),
})<ButtonProps>`
    display: inline-block;
    min-width: ${props => props.theme.hardCodedSizes.buttonMinWidth}px;
    width: ${props => props.width && props.width};
    height: ${props => props.theme.hardCodedSizes.buttonHeight}px;
    padding: 0 24px;
    border: 0;
    letter-spacing: ${props => props.theme.type.letterSpacing.wide};
    border-radius: ${props => props.theme.hardCodedSizes.buttonHeight / 2}px;
    line-height: ${props => props.theme.hardCodedSizes.buttonHeight}px;
    cursor: pointer;
    color: ${props => props.color};
    background: ${props => props.background};
    ${transitionXs};
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.body,
            props.theme.type.multipliers.heading,
            props.theme.breakpoints,
        )};

    &:hover {
        color: ${props => props.colorhover};
        background: ${props => props.backgroundhover};
    }
`;

export const ButtonText = styled.span<ButtonTextProps>`
    display: block;
    padding-top: ${props => props.theme.spacing.vertical.sm};
    font-size: ${props => (props.small ? props.theme.type.size.xxs : props.theme.type.size.md)}px;
    font-family: ${props => props.theme.type.family.heading};
    font-weight: ${props => props.fontWeight && props.fontWeight};
    letter-spacing: ${props => props.theme.type.letterSpacing.wide};

    /******************************** textTransform ********************************/
    ${is('uppercase')`
      text-transform: uppercase;
    `};

    ${is('capitalize')`
      text-transform: capitalize;
    `};

    ${is('lowercase')`
      text-transform: capitalize;
    `};
`;

export const ButtonTextAlt = styled.span`
    display: block;
`;

const BigButtonContainer = styled.div`
    display: inline-block;
    padding-top: ${props => props.theme.spacing.fixed.md};
    padding-left: ${props => props.theme.spacing.fixed.md};
    padding-right: ${props => props.theme.spacing.fixed.md};
    padding-bottom: ${props => props.theme.spacing.vertical.lg};
    color: ${props => props.theme.colors.gray4};
    text-align: left;
    background: ${props => props.theme.colors.grayFadeAlt};
    border-radius: 8px;
    ${transitionXs};

    &:hover {
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.primary};
    }
`;

export const BBIconContainer = styled.div`
    position: relative;
    width: 155px;
    height: 180px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    background: ${props => props.theme.colors.white};

    /* target nested divs created by react-svg */
    div {
        height: 100%;
    }
    svg {
        width: 100%;
        height: 100%;
    }
`;

export const ButtonPrimary = (props: ButtonProps) => (
    <Button
        {...props}
        normal={{
            color: 'gray',
            background: 'primary',
        }}
        hover={{ color: 'white', background: 'primary' }}
        regularcase={1}
    >
        {props.children}
    </Button>
);

export const ButtonSecondary = (props: ButtonProps) => (
    <Button
        {...props}
        normal={{
            color: 'gray4',
            background: 'primary',
        }}
        hover={{ color: 'white', background: 'primary' }}
        regularcase={1}
        width="100%"
    >
        {props.children}
    </Button>
);

//TODO: Add react-svg to node_modules
export const BigButton: React.FC<BBProps> = ({ icon, shortName, tagline }) => (
    <BigButtonContainer>
        {icon && (
            <BBIconContainer>
                <ReactSVG src={icon} />
            </BBIconContainer>
        )}
        <ButtonText>{tagline}</ButtonText>
        <ButtonTextAlt>{shortName}</ButtonTextAlt>
    </BigButtonContainer>
);
