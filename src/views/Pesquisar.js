import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import pesquisarStyles from '../assets/css/views/pesquisarStyles';

function Pesquisa() {
    const [medicines,setMedicines] = useState("");
    const [loading, setLoading] = useState(false);
    const [resources, setResources] = useState([]);
    const { Search, SearchArea, Titulo1, Input, Button, 
        Results, ResultsBody, TableRows, TableElement, 
        TableHeader, Form, Info, TableField, TextLabel, LoadingSymbol } = pesquisarStyles;

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          setLoading(true)
          const response = await fetch(`https://cors-everywhere-me.herokuapp.com/http://renamebackend2022-env.eba-xy2gpjud.sa-east-1.elasticbeanstalk.com/searchinfo/?name=${medicines}`);
          const parseResponse = await response.json();
          setLoading(false)
          setResources(parseResponse);
        } catch (err) {
          console.error(err.message);
        }
    }

    return (
        <Search>
            <Titulo1>Painel de Pesquisa</Titulo1>
            <SearchArea>
                <Form onSubmit={onSubmitForm}>
                    <Input
                    type="text" 
                    size="50"
                    value={medicines}
                    onChange={(e) => setMedicines(e.target.value)}
                    />
                    <Button type="submit" name="name"><span className="material-symbols-outlined">search</span></Button>
                </Form>
            </SearchArea>
            {loading && 
            <LoadingSymbol><ReactLoading type={"spokes"} color={"#034263"} /></LoadingSymbol>}
            {!loading && <TableField>
            <Results>
                <ResultsBody>
                    <TableRows>
                            <TableHeader>Denominação Genérica</TableHeader>
                            <TableHeader>Composição/Concentração</TableHeader>
                            <TableHeader>Forma farmacêutica</TableHeader>
                            <TableHeader>Código ATC</TableHeader>
                            <TableHeader>Componente</TableHeader>
                            <TableHeader>Classificação AWaRe</TableHeader>
                    </TableRows>
                {resources.map(resource => (
                    <TableRows>
                        <TableElement>{resource.Denominação_Genérica}</TableElement>
                        <TableElement>{resource.Concentração_Composição}</TableElement>
                        <TableElement>{resource.Forma_Farmacêutica}</TableElement>
                        <TableElement>{resource.Código_ATC}</TableElement>
                        <TableElement>{resource.Componente}</TableElement>
                        <TableElement>{resource.Classificação_AWaRe}</TableElement>
                    </TableRows>
                    ))}
                </ResultsBody>
            </Results>
            </TableField>}
            {(resources.length == 0 && !loading) && <TextLabel>Nenhum resultado</TextLabel>}
            <TextLabel>A legenda para as informações contidas estão <b><Info href="/legenda/">aqui</Info></b></TextLabel>
        </Search>
    )};
  
  export default Pesquisa;