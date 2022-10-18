import styled from 'styled-components';

const HeaderSite = styled.div`
    @keyframes fadeIn {
        from {opacity: 0%} to {opacity:100%}
    }

    @media (min-width:480px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        justify-content: space-between;
        padding:1rem;
        font-family: Open Sans;
        height: 8vh;
        animation:fadeIn 1s;
    }
`;

const NavigationLinks = styled.ul`
    @media (min-width:320px) {
        display:grid;
        grid-template-columns: repeat(2,1fr);
        width:50vw;
        padding:0;
        margin-left:auto;
        margin-right:auto;
        list-style-type: none;
    }

    @media (min-width:400px) {
        display:grid;
        grid-template-columns: repeat(2,1fr);
        list-style-type: none;
        padding-top:1rem;
        margin-top:auto;
        margin-bottom:auto;
    }

    @media (min-width:480px){
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;         
        justify-content: flex-end;
        list-style-type: none;
        width:11rem;
        align-items: start;
        margin-top:auto;
        margin-bottom:auto;
        margin-right:0;
    }

    @media (min-width:801px){
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;         
        justify-content: space-between;
        list-style-type: none;
        width:11rem;
        align-items: start;
    }
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
    @media (min-width: 320px) {
        display:block;
        vertical-align: middle;
        margin:15px auto;
        width:90vw;
    }

    @media (min-width:480px) {
        width:50vw;
        height:4vh;
    }

    @media (min-width:550px) {
        width:40vw;
        height:4vh;
    }

    @media (min-width:650px) {
        width:35vw;
        height:4vh;
    }

    @media (min-width:801px) {
        width:30vw;
        height:4vh;
    }

    @media (min-width:900px) {
        width:25vw;
        height:4vh;
    }

    @media (min-width:1100px) {
        width:25vw;
        height:5vh;
    }

    @media (min-width:1366px) {
        width:25vw;
        height:5vh;
    }

    @media (min-width:1600px) {
        width:90%;
        height:65%;
    }
`;

export default {
    HeaderSite,
    NavigationLinks,
    LinkNavigation,
    HTMLNav,
    LogoWeb
}