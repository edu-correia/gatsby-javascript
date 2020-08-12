import React from 'react';
import { HeaderWrapper, PageTitle } from './styled'

const Header = (props) => {
    return(
        <HeaderWrapper>
            <PageTitle cor={props.pageTitle}>Título da página</PageTitle>
        </HeaderWrapper>
    )
}

export default Header;