import React from 'react';
import styled from 'styled-components';

const FooterSite = styled.footer`
    @keyframes fadeIn {
                from {opacity: 0%} to {opacity:100%}
    }
    background-color: #25409a;
    padding-top:2rem;
    @media only screen and (max-width: 991px) {
        display:flex;
        flex-direction:column;
        width:100vw;
        height:18vh;
    }

    @media only screen and (min-width: 1300px) {
        text-align: center;
        color:  #FFFFFF;
        animation: fadeIn 1s;
        height:12vh;
    }
`
const Disclaimer = styled.div`
    font-family:Open Sans;
    font-weight:bold;
    font-size:16px;
    text-align:center;
    color: #fff;
    line-height:22px;
`;

const GithubLink = styled.a`
    font-family:Open Sans;
    font-weight:bold;
    font-size:16px;
    text-align:center;
    color: #fff;
    line-height:22px;
    text-decoration: none;
`;


function Footer() {
  return (
      <FooterSite>
        <Disclaimer>ATENÇÃO: o sistema desenvolvido é extra-oficial e não possui relação com o Ministério da Saúde.</Disclaimer>
      </FooterSite>
  );
}

export default Footer;
