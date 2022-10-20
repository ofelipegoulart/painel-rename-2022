import Header from '../components/Header';
import styled from 'styled-components';
import SUSLogo from '../assets/img/SUSLogo.png'
import Footer from '../components/Footer';
import homeStyles from '../assets/css/views/homeStyles';


function Home() {
    const { Banner, Titulo1, HightlightText, Button, ImageSUS } = homeStyles;
    return (
    <div>
        <Banner>
            <ImageSUS src={SUSLogo}></ImageSUS>
            <div style={{display:"flex",flexDirection:"column"}}>
            <Titulo1>Torne a pesquisa por insumos disponíveis pelo SUS <HightlightText>acessível</HightlightText></Titulo1>
            <Button onClick={event =>  window.location.href='/pesquisar'}>Faça uma pesquisa</Button>
            </div>
        </Banner>
        <Footer />
    </div>
    );
  }

  
  export default Home;