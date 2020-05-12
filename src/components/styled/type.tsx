import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { fontSizer } from './mixins';

type HeadingProps = {
    maxWidth?: string;
    marginTop?: string;
    marginBottom?: string;
    fontWeight?: string | number;
    lineHeight?: string;
    uppercase?: boolean;
    letterSpacing?: string;
    borderBottom?: string;
    hoverColor?: string;
    color?: string;
    size?: string;
    children: React.ReactNode;
};

type PtagProps = {
    marginTop?: string;
    marginBottom?: string;
    maxWidth?: string;
    centered?: boolean;
    size?: string;
    color?: string;
    bold?: boolean;
    textTransform?: string;
};

type TextProps = {
    fontWeight?: string | number;
    color?: string;
};

type NavLinkProps = {
    marginTop?: string;
    marginBottom?: string;
    display?: string;
    textTransform?: string;
    size?: string;
};

// headings
export const Heading = styled.h1<HeadingProps>`
    max-width: ${props => props.maxWidth && props.maxWidth};
    margin: 0;
    margin-top: ${props => typeof props.marginTop !== 'undefined' && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props =>
        typeof props.marginBottom !== 'undefined'
            ? props.theme.spacing.vertical[props.marginBottom]
            : props.theme.spacing.vertical.lg};
    font-family: ${props => props.theme.type.family.heading};
    color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.gray7)};
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.body,
            props.theme.type.multipliers.heading,
            props.theme.breakpoints,
        )};
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
    line-height: ${props =>
        props.lineHeight ? props.theme.type.lineHeight[props.lineHeight] : props.theme.type.lineHeight.regular};
    text-transform: ${props => props.uppercase && 'uppercase'};
    -webkit-font-smoothing: antialiased;
    cursor: default;
    letter-spacing: ${props =>
        props.letterSpacing
            ? props.theme.type.letterSpacing[props.letterSpacing]
            : props.theme.type.letterSpacing.regular};
    border-bottom: ${props => props.borderBottom && `1px solid ${props.theme.colors.grayFade}`};

    a:hover {
        color: ${props => props.hoverColor && props.theme.colors[props.hoverColor]};
    }
`;

export const H1 = (props: HeadingProps) => (
    <Heading
        {...props}
        as="h1"
        children={props.children}
        color={props.color ? props.color : 'gray4'}
        fontWeight={props.fontWeight ? props.fontWeight : 500}
        letterSpacing="narrow"
        lineHeight="compressedAlt"
        marginBottom={typeof props.marginBottom !== 'undefined' ? props.marginBottom : 'md'}
        size="h1"
    />
);
export const H2 = (props: HeadingProps) => (
    <Heading
        {...props}
        as="h2"
        children={props.children}
        color={props.color ? props.color : 'gray7'}
        fontWeight={props.fontWeight ? props.fontWeight : 500}
        letterSpacing="narrow"
        marginBottom="sm2"
        size="h2"
        uppercase
    />
);
export const H3 = (props: HeadingProps) => (
    <Heading {...props} as="h3" children={props.children} marginBottom="sm" color="gray4" size="h3" />
);
export const H4 = (props: HeadingProps) => (
    <Heading {...props} as="h4" children={props.children} color="gray4" marginBottom="xs" size="h4" />
);
export const H5 = (props: HeadingProps) => (
    <Heading {...props} as="h5" children={props.children} marginBottom="lg" size="h5" />
);
export const H6 = (props: HeadingProps) => (
    <Heading
        {...props}
        as="h6"
        children={props.children}
        color="gray9"
        fontWeight={500}
        letterSpacing="narrow"
        size="h6"
        uppercase
    />
);

// body
export const P = styled.p<PtagProps>`
    max-width: ${props => props.maxWidth && props.maxWidth};
    margin-top: ${props => typeof props.marginTop !== 'undefined' && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props =>
        typeof props.marginBottom !== 'undefined'
            ? props.theme.spacing.vertical[props.marginBottom]
            : props.theme.spacing.vertical.lg};
    margin-left: ${props => props.centered && 'auto'};
    margin-right: ${props => props.centered && 'auto'};
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.body,
            props.theme.type.multipliers.body,
            props.theme.breakpoints,
        )};
    color: ${props => props.color && props.theme.colors[props.color]};
    font-weight: ${props => props.bold && 'bold'};
    text-transform: ${props => props.textTransform && props.textTransform};
    text-align: ${props => props.centered && 'center'};
    cursor: default;
`;
export const SmallText = styled.span<TextProps>`
    max-width: 80%;
    margin: 0 0 ${props => props.theme.spacing.vertical.md};
    color: ${props => props.color && props.theme.colors[props.color]};
    letter-spacing: ${props => props.theme.type.letterSpacing.regular};
    font-family: ${props => props.theme.type.family.heading};
    line-height: ${props => props.theme.type.lineHeight.extended};
    text-transform: uppercase;
    font-weight: ${props => props.fontWeight && props.fontWeight};
    font-size: ${props => props.theme.type.size.sm}px;
    ${props => fontSizer(props.theme.type.size.xs, props.theme.type.multipliers.body, props.theme.breakpoints)};
`;
export const Em = styled.span`
    font-style: italic;
`;

// links
export const NavLink = styled(Link)`
    margin-top: ${props => typeof props.marginTop !== 'undefined' && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props =>
        typeof props.marginBottom !== 'undefined'
            ? props.theme.spacing.vertical[props.marginBottom]
            : props.noMargin
            ? 0
            : props.theme.spacing.vertical.lg};
    display: ${props => (props.display ? props.display : 'block')};
    font-family: ${props => props.theme.type.family.heading};
    text-transform: ${props => props.textTransform && props.textTransform};
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.body,
            props.theme.type.multipliers.body,
            props.theme.breakpoints,
        )};
`;

export const NavClickLink = styled.a<NavLinkProps>`
    margin-top: ${props => typeof props.marginTop !== 'undefined' && props.theme.spacing.vertical[props.marginTop]};
    margin-bottom: ${props =>
        typeof props.marginBottom !== 'undefined'
            ? props.theme.spacing.vertical[props.marginBottom]
            : props.theme.spacing.vertical.lg};
    display: ${props => (props.display ? props.display : 'block')};
    font-family: ${props => props.theme.type.family.heading};
    text-transform: ${props => props.textTransform && props.textTransform};
    cursor: pointer;
    ${props =>
        fontSizer(
            props.size ? props.theme.type.size[props.size] : props.theme.type.size.body,
            props.theme.type.multipliers.body,
            props.theme.breakpoints,
        )};
`;
