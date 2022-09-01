import styled from 'styled-components'; // eslint-disable-next-line

const HeaderMobile = styled.div`
    @media screen and (min-device-width: 480px){
        display:none;
    }
`;

const Titulo = styled.h2`
    max-width:50%;
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

function Header() {
  return (
    <div>
      <h1>Estamos na home</h1>
      </div>
  );
}

export default Header;
