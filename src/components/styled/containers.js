import styled from 'styled-components'

export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-content: ${props => props.stretch ? 'stretch' : 'center'};
  justify-content: ${props=> props.justifySpacing ? props.justifySpacing : 'space-between'};
  padding-top: ${props =>
    props.paddingTop && props.theme.spacing.vertical[props.paddingTop]};
  margin: ${props => props.marginAuto && '0 auto'};
`;

export const FlexItem = styled.div`
  flex: ${props => props.flexOrder ? props.flexOrder : 1};
  align-self: ${props => props.align ? props.align : 'center'};
  padding: ${props => props.padding ? props.padding : '10px'};
`
