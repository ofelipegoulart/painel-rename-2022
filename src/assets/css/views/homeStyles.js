import styled from 'styled-components';

const Banner = styled.div`
    @keyframes fadeIn {
        from {opacity: 0%} to {opacity:100%}
    }

    display:flex;
    align-items: center;
    animation: fadeIn 1s;
    padding:1rem;

@media only screen and (max-width:450px) {
    flex-direction: column;
    padding-top:50px;
}
@media only screen and (min-width:450px) {
    justify-content: center;
    padding-bottom:5rem;
}`;

const Titulo1 = styled.p`
font-family:Open Sans;
font-weight:500;
@media (max-width:600px) {
    text-transform: uppercase;
    text-align:center;
    width:50vw;
    font-size:28px;
}

@media only screen and (min-width: 600px) and (max-width:900px) {
    font-size:32px;
    text-transform: uppercase;
    text-align:center;
    width:50vw;
    padding-left:2rem;
    padding-top:4rem;
}

@media only screen and (min-width: 900px) and (max-width:1200px) {
    font-size:38px;
    text-transform: uppercase;
    text-align:center;
    width:50vw;
    padding-left:2rem;
    padding-top:4rem;
}

@media only screen and (min-width: 1200px){
    font-size:44px;
    text-transform: uppercase;
    text-align:center;
    width:50vw;
    padding-left:2rem;
    padding-top:4rem;
}`;

const HightlightText = styled.span`
color: #25409a;
font-weight:600;
`;

const ImageSUS = styled.img`
@media only screen and (max-width: 450px){
    width:50vw;
}

@media only screen and (min-width: 450px) and (max-width:600px){
    width:40vw;
    padding-top:2rem;
}

@media only screen and (min-width: 600px) and (max-width:900px){
    width:35vw;
    padding-top:2rem;
}

@media only screen and (min-width: 900px) and (max-width:1200px){
    width:30vw;
    padding-top:2rem;
}

@media only screen and (min-width: 1200px) {
    width:25vw;
    padding-top:2rem;
}`;

const Button = styled.button`

    @media screen and (min-width:320px) {
        border: none;
        margin:auto;
        text-transform: uppercase;
        width:40vw;
        height:5vh;
        font-size:14px;
        background-color: #25409a;
        color: #fff;    
    }

    @media screen and (min-width: 600px) {
        border: none;
        width:35vw;
        height:5vh;
        margin:auto;
        text-transform: uppercase;
        font-size:18px;
        background-color: #25409a;
        color: #fff;    
    }

    
    @media screen and (min-width: 700px) {
        border: none;
        width:30vw;
        height:6vh;
        margin:auto;
        text-transform: uppercase;
        font-size:18px;
        background-color: #25409a;
        color: #fff;    
    }

    @media screen and (min-width: 910px) {
        border: none;
        width:15vw;
        height:8vh;
        margin:auto;
        text-transform: uppercase;
        font-size:18px;
        background-color: #034263;
        color: #fff;    
    }

    `;

export default {
    Banner,
    Titulo1,
    HightlightText,
    ImageSUS,
    Button
}