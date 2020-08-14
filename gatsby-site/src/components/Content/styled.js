import styled from 'styled-components';

export const ContentWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    background-color: ${props => props.contentBg};
    color: ${props => props.pageText};
    font-size: 24px;
    padding: 50px 50px 0px 50px;
    line-height: 32px;
    box-sizing: border-box;
`;