import React from 'react';
import styled from 'styled-components';

const HeaderMobile = styled.div`
    @media screen and (min-device-width: 480px){
        display:none;
    }
`;

const FooterSite = styled.footer`
    @media screen and (max-device-width:991px) {
        display:none;
    }
    @media screen and (min-device-width:992px) {
        position:relative;
        bottom:0;
        margin-top:2.5rem;
        width:100%;
        display:flex;
        justify-content:center;
        background-color: #25409a;
    }
`;

const Disclaimer = styled.div`
    font-family:Open Sans;
    font-weight:bold;
    font-size:16px;
    text-align:center;
    width:32rem;
    margin:0.5rem;
    line-height:22px;
    color: #fff;
`;



function Footer() {
  return (
    <div>
      <FooterSite>
        <Disclaimer>ATENÇÃO: o sistema desenvolvido é extra-oficial e não possui relação com o Ministério da Saúde.</Disclaimer>
      </FooterSite>
      </div>
  );
}

export default Footer;
