import styled from 'styled-components';

type Props = {
    column?: boolean;
    center?: boolean;
};

export const UL = styled.ul<Props>`
    list-style: none;
    padding-inline-start: 0;
    display: flex;
    flex-direction: ${props => props.column && 'column'};
    align-items: ${props => props.center && 'center'};
`;

export const LI = styled.li``;
