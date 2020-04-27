import styled from 'styled-components'

export const FlexRow = styled.div`
  display: flex;
  flex-direction: ${props => props.column && 'column'};
  height: 100%; /* ancestors also need 100% height if column */
  align-items: ${props => props.stretch ? 'stretch' : 'center'};
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

export const Container = styled.div`
  margin-left: ${props => props.marginLeft ? props.theme.spacing.horizontal[props.marginLeft] : 'auto'};
  margin-right: ${props => props.marginRight ? props.theme.spacing.horizontal[props.marginRight] : props.marginLeft ? props.theme.spacing.horizontal[props.marginLeft] : 'auto'};
  height: 100%;
`;

export const FlexRowVAlign = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
