import styled from "styled-components";

const Titulo1 = styled.h2`
    font-family:Open Sans;
    font-weight:bold;
    font-size:36px;
    text-transform: uppercase;
    color: #034263;
    text-align:center;
    margin-bottom:"1.5rem";
`;

const Link = styled.a`
    text-decoration: none;
    color:#000;
    font-weight:bold;
`;

const Text = styled.p`
    font-family:Open Sans;
    font-size:18px;
    text-align:justify;
    margin:auto;
    width:95vw;
    @media only screen and (max-width:550px) {
        width:90vw;
    }
`;

const Container = styled.div`
    margin-bottom:45px;
    @keyframes fadeIn {
        from {opacity: 0%} to {opacity:100%}
    }
    animation: fadeIn 1s;
`

export default {
    Titulo1,
    Text,
    Container,
    Link
}