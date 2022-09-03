import Header from '../components/Header';
import styled from 'styled-components';
import SUSLogo from '../assets/img/SUSLogo.png'
import Footer from '../components/Footer';

const Banner = styled.div`
    @keyframes fadeIn {
        from {opacity: 0%} to {opacity:100%}
    }
    position:relative;
    display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    justify-content: center;
    align-items: center;
    height: 75.1vh;
    animation: fadeIn 0.7s;
`;

const Titulo1 = styled.p`
    font-family:Open Sans;
    font-weight:500;
    font-size:44px;
    text-transform: uppercase;
    text-align:center;
    line-height:65.37px;
    width:28rem;
`

const HightlightText = styled.span`
    color: #25409a;
    font-weight:600;
`

const ImageSUS = styled.img`
    width:16rem;
    height:16rem;
    `;

function Home() {
    return (
    <div>
        <Banner>
            <ImageSUS src={SUSLogo}></ImageSUS>
            <Titulo1>Torne a pesquisa por insumos disponíveis pelo SUS <HightlightText>acessível</HightlightText></Titulo1>
        </Banner>
        <Footer />
    </div>
    );
  }

  
  export default Home;