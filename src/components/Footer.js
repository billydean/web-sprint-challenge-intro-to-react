import React from 'react';
import styled from 'styled-components';

const FootBox = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.5rem;
    padding: 0 26vw 0 0;
    background-color: #d9d2c9;    
`;
const Contact = styled.a`
    text-decoration: none;
    text-align: right;
    color: #495363;
    font-size: 1rem;
    transition: all 1s ease-out 250ms;
    &:hover {
        font-size: 1.2rem;
        transition: all 1s ease-out 250ms;
    }    
`;

const Footer = () => {
    return (
        <FootBox>
            <Contact href="https://github.com/billydean">
                billy dean
            </Contact>
        </FootBox>
    )
}
export default Footer;