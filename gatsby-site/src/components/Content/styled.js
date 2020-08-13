import styled from 'styled-components';

export const ContentWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    background-color: ${props => props.contentBg};
`;