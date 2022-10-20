import styled from 'styled-components';

const Search = styled.div`
    @keyframes fadeIn {
                from {opacity: 0%} to {opacity:100%}
            }
    @media screen and (min-width:320px) {
        display:flex;
        flex-direction:column;
        align-items:center;
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
    height:83%;
    width:80%;
    margin:0 auto;
    vertical-align: top;
    border:none;
    border: 1px solid gray;
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
    cursor:pointer;
`;

const Results = styled.table`
    border-collapse: collapse;
    border: 1px solid #034263;
`;

const ResultsBody = styled.tbody`
    border: 1px solid #034263;
`;

const TableRows = styled.tr`
    text-align: left;
    padding: 8px;
    @media screen and (min-width: 320px) {
        overflow-x: auto;
    }
`;

const TableElement = styled.td`
    border: 1px solid #025;
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
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    text-align: left;
    padding: 8px;
`;

const Form = styled.form`
    height:40px;  
`;

const Info = styled.a`
    font-family:Open Sans;
    font-size:16px;
    text-align:center;
    text-decoration:none;
    color:#000;
`;

const TextLabel = styled.a`
    font-family:Open Sans;
    font-size:16px;
    text-align:center;
    text-decoration:none;
    color:#000;
    padding-top:2rem;
`;

const TableField = styled.div`
    padding-top:2rem;
    @media screen and (min-width:320px) and (max-width:1001px) {
        overflow-x:auto;
        width:70vw;
    }
    @media screen and (min-width:1001px) {
        margin:auto;
        width:66vw;
    }
`;

const LoadingSymbol = styled.div`
    margin:auto;
    padding:0.5rem;
    @media screen and (min-width:320px) and (max-width:600px) {
    }
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
    Form,
    Info,
    TableField,
    TextLabel,
    LoadingSymbol
}