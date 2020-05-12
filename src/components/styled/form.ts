import styled from 'styled-components';

export const FormContainer = styled.div`
    padding: 130px 15px 0;
    margin: 0 auto;
    max-width: 1170px;
    height: 100vh;
    text-align: center;

    @media (min-width: ${props => props.theme.breakpoints.sm}px) {
        padding: 100px 15px 0;
        width: 1000px;
    }
`;

export const Input = styled.input.attrs(props => ({
    type: props.type || 'text',
}))`
    margin-bottom: 20px;
    padding: 8px 15px 7px 20px;
    font-size: 1.5em;
    letter-spacing: 0.3px;
    border: 1px solid #d6d6d6;
    height: 50px;
    color: #38373b;
    border-radius: 3px;
    line-height: normal;
`;

export const TextArea = styled.textarea<{ height: string }>`
    margin-bottom: 20px;
    padding: 8px 15px 7px 20px;
    font-size: 1.5em;
    letter-spacing: 0.3px;
    border: 1px solid #d6d6d6;
    color: #38373b;
    border-radius: 3px;
    line-height: normal;
    height: ${props => (props.height ? props.height : 'auto')};
    width: 100%;
`;
