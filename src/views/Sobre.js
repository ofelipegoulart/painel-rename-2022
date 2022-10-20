import react from 'react';
import sobreStyles from '../assets/css/views/sobreStyles';

function Sobre() {

    const {Titulo1, Text, Container, Link} = sobreStyles;
    return (
    <div style={{marginBottom:"5rem"}}>
        <Container>
            <Titulo1>Sobre o Projeto</Titulo1>
                <Text>
                    O Painel RENAME 2022 é uma plataforma que reúne todos os fármacos e insumos informados pela Relação Nacional de Medicamentos Essenciais 2022, lista que apresenta os medicamentos disponbilizados pelo Sistema Único de Saúde. O documento é revisado e atualizado a cada dois anos pela Comissão Nacional de Incorporação de Tecnologias no Sistema Único de Saúde (CONITEC). No entanto, o documento é disponibilizado em um arquivo PDF, e não é tão prático realizar uma pesquisa nele. A plaforma, desse modo, visa indexar e inserir um mecanismo de busca pelos fármacos capaz de encurtar e facilitar a pesquisa por esses recursos.
                </Text><br />
                <Text>
                    Sendo assim, o objetivo do Painel RENAME 2022 é de reunir e indexar os insumos presentes na lista, de forma a tornar a consulta por esses medicamentos mais acessível.
                </Text>
        </Container>
        <Container>
            <Titulo1>Tecnologias Utilizadas</Titulo1>
                <Text>
                    O início do projeto se deu por meio da prototipação das telas no Figma, editor gráfico capaz de prototipar telas. A ferramenta foi necessária para o planejamento da interface do sistema e de sua adaptação (responsividade) a outros aparelhos.
                </Text>< br />
                <Text>
                Após o término dessa etapa, o projeto seguiu na fase de desenvolvimento, onde foi utilizada o ReactJS, biblioteca JavaScript capaz de desenvolver interfaces para web.
                </Text>< br/>
                <Text>
                Paralelamente, houve a coleta dos dados no PDF disponibilizado pelo Ministério da Saúde, utilizou-se o software Tabula, que realiza o <i>scrapping,</i> isto é, a obtenção dos dados através do documento PDF. Em seguida, utilizou-se, para o tratamento dos dados, a biblioteca Pandas do Python, que manipula arquivos CSV e os transformam em Dataframe, que é uma forma facilitada de lidar com bases de dados.
                </Text> < br/>
                <Text>
                O projeto foi finalizado após a criação do banco de dados, utilizando-se do MySQL Connector, biblioteca em Python que executa queries a partir da própria linguagem de programação. O banco foi colocado em produção a partir de um serviço da Amazon Web Service (AWS). Logo depois, houve a criação de um web app criado em Node.js no qual fez a conexão do banco de dados com a interface apresentada. Finalmente, a interface foi colocada em produção também por um serviço da AWS.
                </Text>
        </Container>
        
        <Container>
            <Titulo1>Ideias futuras</Titulo1>
                <Text>
                    Uma possível implementação futura será de conectar a API de Knowledge Graph da Google para obter informações sobre o fármaco/insumo, de forma a compreender seu princípio ativo, sua descrição e outras informações.
                </Text>
        </Container>

        <Container>
            <Titulo1>Códigos-Fonte</Titulo1>
                <Text>
                    O código-fonte da interface pode ser conferido <Link href="https://github.com/ofelipegoulart/painel-rename-2022" target="_blank">aqui.</Link>
                </Text>
                <Text>
                    Para conferir o código-fonte da criação da base de dados, clique <Link href="https://github.com/ofelipegoulart/rename-2022-pandas" target="_blank">aqui.</Link>
                </Text>
                
        </Container>
        
        <Container>
            <Titulo1>Sobre o Desenvolvedor</Titulo1>
                <Text>
                    Meu nome é Felipe Goulart, sou estudante do curso de Ciências da Computação pela Universidade Federal de Santa Catarina. Estudo desenvolvimento web há 3 anos e há pouco tempo, decidi aprofundar meus estudos em ReactJS e em desenvolvimento back-end. Em 2022, também iniciei na área de dados, trabalhando com web scrapping e manipuação de arquivos CSV com a biblioteca Pandas do Python.
                </Text><br />
                <Text>
                    Para me conhecer mais, você pode conferir meu <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/felipe-souza-goulart/">LinkedIn</a> e meu <a style={{textDecoration:"none"}} href="https://github.com/ofelipegoulart">Github</a>!
                </Text>
        </Container>
        
    </div>
    );
  }
  
  export default Sobre;