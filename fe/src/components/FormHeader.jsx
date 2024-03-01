import React from 'react';
import styled from 'styled-components';

import COLOR_PALETTE from '../constants/colors';

function FormHeader({ content }) {
    return (
        <FormHeaderElement>
            <span>{ content }</span>
        </FormHeaderElement>
    );
}

const FormHeaderElement = styled.div`
height: 10%;
width: 100%;
border: solid 1px ${COLOR_PALETTE.DODGERBLUE};
display: block;
background-color: ${COLOR_PALETTE.LIGHT_BLUE};
text-align: left;
padding: 10px;
color: ${COLOR_PALETTE.DODGERBLUE}
`
export default FormHeader;