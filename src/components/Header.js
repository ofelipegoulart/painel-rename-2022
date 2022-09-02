import styled from 'styled-components';
import logo from '../assets/img/logo.png';

const HeaderMobile = styled.div`
    @media screen and (min-device-width: 480px){
        display:none;
    }
`;

const Titulo = styled.h2`
    max-width:50%;
    color: linear-gradient(90deg, #005496 50%,red 50%);
`;

const HeaderSite = styled.div`
    @media screen and (max-device-width:991px) {
        display:none;
    }
    @media screen and (min-device-width:992px) {
    display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: space-between;
    padding:1rem;
    font-family: Open Sans;
    height: 8vh;
    }
`;

const NavigationLinks = styled.ul`
    display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: space-between;
    list-style-type: none;
    width:10rem;
    
`;

const LinkNavigation = styled.li`
    text-transform: uppercase;
    text-decoration: none;
`;

const HTMLNav = styled.a`
    color:inherit;
    text-decoration: none;
`;

const LogoWeb = styled.img`
    width:17.813rem;
    height:1.563rem;
    padding:0.9rem;
`;

function Header() {
  return (
    <div>
      <div>
      <HeaderMobile>
      <Titulo>Painel RENAME 2022</Titulo>
        <ul>
          <li><a>Sobre</a></li>
          <li><a>Pesquisar</a></li>
        </ul>
      </HeaderMobile>
      <HeaderSite>
      <a href="/"><LogoWeb src={logo}></LogoWeb></a>
        <NavigationLinks>
            <LinkNavigation><HTMLNav href="/sobre">Sobre</HTMLNav></LinkNavigation>
            <LinkNavigation><HTMLNav href="/pesquisar">Pesquisar</HTMLNav></LinkNavigation>
        </NavigationLinks>
        </HeaderSite>
      </div>
      </div>
  );
}

export default Header;
