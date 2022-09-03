import React from 'react';
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
`;

const SearchArea = styled.div`
    display:flex;
    justify-content:space-between;

`;

const Titulo1 = styled.h2`
    font-family:Open Sans;
    font-weight:bold;
    font-size:30px;
    text-transform: uppercase;
    color: #034263;
    margin:120px auto 30px auto;
`;

const Input = styled.input`
    width: 100%;
    border: medium none;
    height: auto;
`;

const Button = styled.button`
    border: none;
    color: white;
    padding: 5px 10px;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    background-color:#034263;
`;

function Pesquisa() {
    return (
        <Search>
            <Titulo1>Painel de Pesquisa</Titulo1>
            <SearchArea>
                <input type="text" size="50"></input>
                <Button type="submit"><span class="material-symbols-outlined">search</span></Button>
            </SearchArea>
        </Search>
    );
  }

  
  export default Pesquisa;