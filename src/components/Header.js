import headerStyles from './headerStyles';
import logo from '../assets/img/logo.png';

function Header() {
    const { HeaderSite, NavigationLinks, LinkNavigation, HTMLNav, LogoWeb } = headerStyles;
  return (
      <HeaderSite>
      <a href="/"><LogoWeb src={logo}></LogoWeb></a>
        <NavigationLinks>
            <LinkNavigation><HTMLNav href="/sobre">Sobre</HTMLNav></LinkNavigation>
            <LinkNavigation><HTMLNav href="/pesquisar">Pesquisar</HTMLNav></LinkNavigation>
        </NavigationLinks>
        </HeaderSite>
  );
}

export default Header;
