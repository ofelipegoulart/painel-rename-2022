import react from 'react';
import legendasStyles from '../assets/css/views/legendasStyles';

function Legenda() {

    const { Titulo1, Text, Container, Results,
        ResultsBody, TableRows, TableHeader, TableElement } = legendasStyles
    return (
    <div style={{marginBottom:"5rem"}}>
        <Container>
            <Titulo1>Legendas Gerais</Titulo1>
                <Text>
                    <span style={{fontWeight:"bold", color:"#034263"}}>Denominação Genérica</span> nada mais é que o nome do princípio ativo do insumo. No RENAME, não há itens apresentados pelo seu nome comercial.
                </Text>
                <Text>
                    <span style={{fontWeight:"bold", color:"#034263"}}>Composição/Concentração</span> é a quantidade em que o insumo se apresenta.
                </Text>
                <Text>
                    <span style={{fontWeight:"bold", color:"#034263"}}>Forma Farmacêutica</span> se trata do material em que o insumo se apresenta (solução oral, comprimido, cápsula, etc).
                </Text>
        </Container>
        <Container>
            <Titulo1>Código ATC</Titulo1>
                <Text>
                    Dentro da apresentação do documento do RENAME, existem duas classificações para os insumos do SUS: pelo apêndice A, que é a partir do  Sistema de
Classificação Anatômica Terapêutica Química, do inglês Anatomical Therapeutic Chemical (ATC) Classification System. As iniciais de cada código representam o sistema humano que o insumo atua, sendo eles:
                </Text>
                <Results>
                    <TableRows>
                        <TableHeader>Inicial do Código ATC</TableHeader>
                        <TableHeader>Sistema do Corpo Humano</TableHeader>
                    </TableRows>
                    <ResultsBody>
                        <TableRows>
                            <TableElement>A</TableElement>
                            <TableElement>Trato alimentar e metabolismo</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>B</TableElement>
                            <TableElement>Sangue e órgãos formadores de sangu</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>C</TableElement>
                            <TableElement>Sistema Cardiovascular</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>D</TableElement>
                            <TableElement>Dermatológicos</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>G</TableElement>
                            <TableElement>Sistema geniturinário e hormônios sexuais</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>H</TableElement>
                            <TableElement>Preparações hormonais sistêmicas, excluindo hormônios sexuais e insulinas</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>J</TableElement>
                            <TableElement>Anti-infecciosos para uso sistêmico</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>L</TableElement>
                            <TableElement>Agentes antineoplásicos e imunomoduladores</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>M</TableElement>
                            <TableElement>Sistema musculoesquelético</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>N</TableElement>
                            <TableElement>Sistema nervoso</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>P</TableElement>
                            <TableElement>Produtos antiparasitários, inseticidas e repelentes</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>R</TableElement>
                            <TableElement>Sistema respiratório</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>S</TableElement>
                            <TableElement>Órgãos sensoriais</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>V</TableElement>
                            <TableElement>Vários</TableElement>
                        </TableRows>
                    </ResultsBody>
                </Results>
        </Container>

        <Container>
            <Titulo1>Composição</Titulo1>
                <Text>
                    Os medicamentos, ao serem classificados quanto a composição, são categorizados: básico, estratégico, especializado e hospitalar, 
                </Text><br />
                <Results>
                    <TableRows>
                        <TableHeader>Componente</TableHeader>
                        <TableHeader>Descrição</TableHeader>
                    </TableRows>
                    <ResultsBody>
                        <TableRows>
                            <TableElement>Básico</TableElement>
                            <TableElement>Medicamentos e insumos no âmbito da Atenção Primária</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>Estratégico</TableElement>
                            <TableElement>Medicamentos para tratamento de doenças de relevância epidemiológica</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>Especializado</TableElement>
                            <TableElement>Medicamentos para tratamento de doenças e agravos menos prevalentes e com alto impacto financeiro</TableElement>
                        </TableRows>
                        <TableRows>
                            <TableElement>Hospitalar</TableElement>
                            <TableElement>Compreende o emprego de medicamentos em pacientes hospitalares.</TableElement>
                        </TableRows>
                    </ResultsBody>
                </Results>
                
        </Container>

        <Container>
            <Titulo1>Classificação AWaRe</Titulo1>
                <Text>
                    Essa classificação se baseia em 3 níveis: acesso, alerta e reservado.
                </Text><br />
                <Text>
                    O grupo 1 <b>("acesso")</b> estão contidos os medicamentos que são utilizados em tratamentos de infecções comuns, ou seja, são amplamente acessíveis.
                </Text>
                <Text>
                    O grupo 2 <b>("alerta")</b> estão contidos os medicamentos que são utilizados em tratamentos de doenças e síndromes muito bem definidas, ou seja, seu uso deve ser monitorado continuamente.
                </Text>
                <Text>
                    Já o grupo 3 <b>("resevado")</b> estão contidos os medicamentos que devem ser utilizados como último recurso para tratar infecções bacterianas resistentes a múltiplos medicamentos.
                </Text><br />
        </Container>

        <Container>
                <Text style={{textAlign:"right"}}>
                    Fonte: Ministério da Saúde, RENAME 2022, <br />Secretaria da Saúde do Governo do Estado do Paraná
                </Text><br />
                
        </Container>
    </div>
    );
  }
  
  export default Legenda;