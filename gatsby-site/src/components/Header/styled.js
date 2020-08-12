import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    width: 100vw;
    height: 100px;
    background-color: #444;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageTitle = styled.h1`
    font: 700 56px sans-serif;
    color: ${props => props.cor};
`;