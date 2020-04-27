import styled from 'styled-components';

export const UnderlayHitArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${props => props.theme.zIndex.two};
  pointer-events: ${props => !props.isClickable && 'none'};
`;
export const ModalContainer = styled.div`
  position: absolute;
  top: calc(4vh + ${props => (props.scrollTop ? props.scrollTop : 0)}px);
  left: 17%;
  width: 66%;
  min-height: 400px; // TODO combine with other minimums?
  margin-bottom: ${props => props.theme.spacing.vertical.xxl};
  background: ${props => props.theme.colors.white};
  z-index: ${props => props.theme.zIndex.three};
`;
export const ModalInner = styled.div`
  padding: ${props => props.theme.spacing.vertical.lg};
`;
