import styled from 'styled-components';

const Search = styled.div`
    @keyframes fadeIn {
                from {opacity: 0%} to {opacity:100%}
            }
    @media screen and (min-width:320px) {
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
        animation: fadeIn 1s;
        margin-bottom:8rem;
    }
    
`;

const SearchArea = styled.div`
    @media screen and (min-width:320px) {
        display:flex;
        margin:10px;
    }
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
    @media screen and (min-width:320px) {
    height:75%;
    width:80%;
    margin:0 auto;
    vertical-align: top;
    }
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
    border-collapse: collapse;
    @media screen and (min-width: 320px) {
        margin:4rem;
        overflow-x: scroll;
    }
    
`;

const ResultsBody = styled.tbody`
    @media screen and (min-width: 320px) {
        overflow-x: auto;
    }
`;

const TableRows = styled.tr`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    @media screen and (min-width: 320px) {
        overflow-x: auto;
    }
`;

const TableElement = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    @media screen and (min-width: 320px) {
        overflow-x: auto;
    }
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

export default {
    Search,
    SearchArea,
    Titulo1,
    Input,
    Button,
    Results,
    ResultsBody,
    TableRows,
    TableElement,
    TableHeader,
    Form
}