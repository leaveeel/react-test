import React from 'react'
import {
    Head,
    Main,
    MainLeft,
    Logo,
    MainRight,
} from './style'
import Navigate from './navigate';
import HeadSearch from './headSearch';
import LoginState from './loginState';

function Header() {
    return (
        <Head>
            <Main>
                <MainLeft>
                    <Logo href='/' />
                    <Navigate />
                    <HeadSearch />
                </MainLeft>
                <MainRight>
                    <LoginState />
                </MainRight>
            </Main>
        </Head>
    )
}

export default Header;
