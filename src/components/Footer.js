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
        position:absolute;
        bottom:0;
        width:100%;
        background-color: #25409a;
        text-align: center;
        color:  #FFFFFF;
        height: 12vh;
    }
`;

const Disclaimer = styled.div`
    font-family:Open Sans;
    font-weight:bold;
    font-size:16px;
    text-align:center;
    width:32rem;
    margin:15px auto 15px auto;
    line-height:22px;
    color: #fff;
`;



function Footer() {
  return (
      <FooterSite>
        <Disclaimer>ATENÇÃO: o sistema desenvolvido é extra-oficial e não possui relação com o Ministério da Saúde.</Disclaimer>
      </FooterSite>
  );
}

export default Footer;
