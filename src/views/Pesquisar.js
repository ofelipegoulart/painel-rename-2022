import React, { useState } from 'react';
import pesquisarStyles from '../assets/css/pesquisarStyles';

function Pesquisa() {
    const [medicines,setMedicines] = useState("");
    const [resources, setResources] = useState([]);
    const { Search, SearchArea, Titulo1, Input, Button, 
        Results, ResultsBody, TableRows, TableElement, 
        TableHeader, Form } = pesquisarStyles;

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const response = await fetch(`http://localhost:8080/searchinfo/?name=${medicines}`);
    
          const parseResponse = await response.json();
    
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
        </Search>
    )};
  
  export default Pesquisa;