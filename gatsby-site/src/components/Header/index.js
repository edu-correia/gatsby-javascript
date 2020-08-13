import React from 'react';
import { HeaderWrapper, PageTitle } from './styled'

const Header = (props) => {
    console.log(props)
    return(
        <HeaderWrapper navBar={props.navBar}>
            <PageTitle pageTitle={props.pageTitle}>
                Título da página
            </PageTitle>
        </HeaderWrapper>
    )
}

export default Header;