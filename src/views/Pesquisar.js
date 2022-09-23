import React, { useState } from 'react';
import styled from 'styled-components';

const Search = styled.div`
    @keyframes fadeIn {
            from {opacity: 0%} to {opacity:100%}
        }
    display:flex;
    flex-direction:column;
    align-items:center;
    align-content:center;
    width:100%;
    height:80vh;
    animation: fadeIn 1s;
    margin-bottom:8rem;
`;

const SearchArea = styled.div`
`;

const Titulo1 = styled.h2`
    font-family:Open Sans;
    font-weight:bold;
    font-size:30px;
    text-transform: uppercase;
    color: #034263;
    margin:70px auto 30px auto;
`;

const Input = styled.input`
    height:80%;
    margin:0;
    vertical-align: top;
`;

const Button = styled.button`
    margin:0;
    border: none;
    color: white;
    padding: 5px 10px;
    font-size: 16px;
    text-transform: uppercase;
    background-color:#034263;
`;

const Results = styled.table`
    margin:4rem;
    border-collapse: collapse;
    width: 75%;
`;

const TableRows = styled.tr`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

const TableElement = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

const TableHeader = styled.th`
    background-color:#034263;
    color: #fff;
    font-weight: 500;
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

const Form = styled.form`
    height:40px;  
`;

function Pesquisa() {
    const [medicines,setMedicines] = useState("");
    const [resources, setResources] = useState([]);

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
                <tbody>
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
                </tbody>
            </Results>
        </Search>
    )};
  
  export default Pesquisa;