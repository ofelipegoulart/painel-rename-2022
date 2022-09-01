import react from 'react';
import styled from 'styled-components';


const Banner = styled.div`
    display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    margin-top:2rem;
    justify-content: center;
    align-items: center;
`;

const Titulo1 = styled.h2`
    font-family:Open Sans;
    font-weight:600;
    font-size:36px;
    text-transform: uppercase;
    color: #034263;
    text-align:center;
    line-height:65.37px;
`;

const Text = styled.p`
    font-family:Open Sans;
    font-size:18px;
    text-align:justify;
    margin:auto;
    width:75rem;
`;


function Sobre() {
    return (
    <div>
        <Titulo1>Sobre o Projeto</Titulo1>
            <Text>
                A Relação Nacional de Medicamentos Essenciais é uma lista dos medicamentos e insumos disponibilizados no SUS, além de determinados medicamentos de uso hospitalar e outros insumos para saúde.
                Todos os anos, a lista passa por atualizações, seja pela modificação das dosagens recomendadas de cada insumo, seja pela inclusão e/ou exclusão destes mesmos. No entanto, a forma de obter essas informações, por estarem detalhadas em um documento PDF, são pouco práticas para se fazer uma pesquisa rápida e eficiente.
            </Text><br />
            <Text>
            Sendo assim, o objetivo do Painel RENAME 2022 é de reunir e indexar os insumos presentes na lista, de forma a tornar a consulta por esses medicamentos mais acessível.
            </Text>
        <Titulo1>Tecnologias Utilizadas</Titulo1>
            <Text>
                O início do projeto se deu por meio da prototipação das telas no Figma, editor gráfico capaz de prototipar telas.
            </Text>
            <Text>
            Após o término dessa etapa, o projeto seguiu na fase de desenvolvimento, onde foi utilizada o ReactJS, biblioteca JavaScript capaz de desenvolver interfaces para web.
            </Text>< br/>
            <Text>
            Para a coleta dos dados, utilizou-se a ferramenta Tabula, que realiza o <i>scrapping,</i> isto é, a mineração dos dados do documento PDF. 
            </Text> < br/>
            <Text>
            Sendo assim, o objetivo do Painel RENAME 2022 é de reunir e indexar os insumos presentes na lista, de forma a tornar a consulta por esses medicamentos mais acessível.
            </Text>
        <Titulo1>Ideias futuras</Titulo1>
            <Text>
                Uma possível implementação futura será de conectar a API de Knowledge Graph da Google para obter informações sobre o fármaco/insumo, de forma a compreender seu princípio ativo, sua descrição e outras informações.
            </Text>
        <Titulo1>Sobre o Desenvolvedor</Titulo1>
            <Text>
                Meu nome é Felipe Goulart, sou estudante do curso de Ciências da Computação pela Universidade Federal de Santa Catarina. Estudo desenvolvimento web há 3 anos e há pouco tempo, decidi aprofundar meus estudos em ReactJS e em desenvolvimento back-end. Em 2022, também iniciei na área de dados, trabalhando com web scrapping e manipuação de arquivos CSV com a biblioteca Pandas do Python. Tenho uma grande vontade de trabalhar no setor da saúde, pois acredito que a tecnologia pode ser uma das principais aliadas para a promoção do bem-estar na nossa sociedade.
            </Text><br />
            <Text>
                Para me conhecer mais, você pode conferir meu LinkedIn e meu Github!
            </Text>
    </div>
    );
  }
  
  export default Sobre;