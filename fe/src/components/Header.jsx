import React from 'react';
import styled from 'styled-components';

import COLOR_PALETTE from '../constants/colors';

function Header({ content, fontSize = '16px' }) {
    return (
        <HeaderElement style={{ fontSize }}>
            { content }
        </HeaderElement>
    );
}

const HeaderElement = styled.span`
display: block;
color: ${COLOR_PALETTE.BLACK};
margin: 10px 0px 10px 0px;
font-weight: bold;
`
export default Header;