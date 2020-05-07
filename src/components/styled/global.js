import { createGlobalStyle } from 'styled-components';
import { fontSizer } from './mixins';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  vertical-align: baseline;
  font-size: 100%;
  box-sizing: inherit;

  &::before,
  &::after {
    box-sizing: inherit;
  }
}
body {
  height: 100%;
  margin: 0;
  font-family: ${props => props.theme.type.family.default};
  ${props =>
    fontSizer(
      props.theme.type.size.body,
      props.theme.type.multipliers.body,
      props.theme.breakpoints
    )}
  letter-spacing: ${props => props.theme.type.letterSpacing.narrow};
  line-height: ${props => props.theme.type.lineHeight.regular};
  color: ${props => props.theme.colors.gray4};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
img {
  display: block;
  width: 100%;
}
a {
  color: inherit;
  text-decoration: none;
}
ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
ul + ul {
  margin-top: ${props => props.theme.spacing.vertical.md};
}
button + button {
  margin-left: ${props => props.theme.spacing.horizontal.md};
}
fieldset {
  padding: 0;
  border: 0;
}
label {
  display: inline-block;
  min-width: 80px;
}
input[type="text"] {
  &:disabled {
    background: ${props => props.theme.colors.grayFade};
    border: ${props => `2px solid ${props.theme.colors.grayFade}`};
  }
}
select {
  margin: 0.2em 0 0.6em;
}
table {
  width: inherit;
  overflow: auto;
  display: block;
  align-self: center;
  border: 2px solid ${props => props.theme.colors.grayFade};
  border-radius: 3px;

  td {
    padding-top: ${props => props.theme.spacing.vertical.sm2};

    &:first-child {
      min-width: 140px;
    }
  }
  th + th {
    padding-left: ${props => props.theme.spacing.horizontal.lg};
  }
  td + td {
    padding-left: ${props => props.theme.spacing.horizontal.lg};
  }
}
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
`;
