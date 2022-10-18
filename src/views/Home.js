import Header from '../components/Header';
import styled from 'styled-components';
import SUSLogo from '../assets/img/SUSLogo.png'
import Footer from '../components/Footer';
import homeStyles from '../assets/css/views/homeStyles';


function Home() {
    const { Banner, Titulo1, HightlightText, ImageSUS } = homeStyles;
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