import styled from 'styled-components'

// headings
export const Heading = styled.h1`
  max-width: ${props => props.maxWidth && props.maxWidth};
  margin: 0;
  margin-top: ${props => props.theme.spacing.vertical[props.marginTop]};
  margin-bottom: ${props => props.theme.spacing.vertical[props.marginBottom]};
  font-family: ${props => props.theme.type.family.heading};
  color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.gray7};
  ${props =>
    fontSizer(
      props.theme.type.size[props.size],
      props.theme.type.multipliers.heading,
      props.theme.breakpoints
    )};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  line-height: ${props =>
    props.lineHeight
      ? props.theme.type.lineHeight[props.lineHeight]
      : props.theme.type.lineHeight.regular};
  text-transform: ${props => props.uppercase && 'uppercase'};
  -webkit-font-smoothing: antialiased;
  cursor: default;
  letter-spacing: ${props =>
    props.letterSpacing
      ? props.theme.type.letterSpacing[props.letterSpacing]
      : props.theme.type.letterSpacing.regular};
  border-bottom: ${props =>
    props.borderBottom && `1px solid ${props.theme.colors.grayFade}`};

  a:hover {
    color: ${props => props.hoverColor && props.theme.colors[props.hoverColor]};
  }
`;

export const H1 = props => (
  <Heading
    {...props}
    as="h1"
    children={props.children}
    color={props.color ? props.color : 'gray4'}
    fontWeight={props.fontWeight ? props.fontWeight : 500}
    letterSpacing="narrow"
    lineHeight="compressedAlt"
    marginBottom={
      typeof props.marginBottom !== 'undefined' ? props.marginBottom : 'md'
    }
    size="h1"
  />
);
export const H2 = props => (
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
export const H3 = props => (
  <Heading
    {...props}
    as="h3"
    children={props.children}
    color="gray4"
    size="h3"
  />
);
export const H4 = props => (
  <Heading
    {...props}
    as="h4"
    children={props.children}
    color="gray4"
    marginBottom="xs"
    size="h4"
  />
);
export const H5 = props => (
  <Heading
    {...props}
    as="h5"
    children={props.children}
    marginBottom="lg"
    size="h5"
  />
);
export const H6 = props => (
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
