import Color from 'color'
import styled from 'styled-components'

export const Button = styled.button`
  padding: 13px 32px;
  text-align: center;
  border: none;
  font-size: 1.25em;
  text-transform: capitalize;
  display: inline-block;
  letter-spacing: 0.5px;
  border-radius: 50px;
  line-height: 17px;
  color: #F8F8Fb;
  background: #3434FF;
  cursor: pointer;

  &:hover {
    background: ${Color('#3434FF').lighten(0.1).toString()}
  }
`;
