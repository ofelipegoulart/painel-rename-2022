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
    margin-left:auto;
    margin-right:auto;
    @media screen and (min-width: 320px) {
        margin:2rem auto;
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

const Info = styled.a`
    font-family:Open Sans;
    font-size:16px;
    text-align:justify;
    margin:auto;
    text-decoration:none;
    color:#000;
`;

const Titulo1 = styled.h2`
    font-family:Open Sans;
    font-weight:bold;
    font-size:36px;
    text-transform: uppercase;
    color: #034263;
    text-align:center;
    margin-bottom:"1.5rem";
`;

const Text = styled.p`
    font-family:Open Sans;
    font-size:18px;
    text-align:justify;
    margin:auto;
    width:95vw;
    @media only screen and (max-width:550px) {
        width:90vw;
    }
`;

const Container = styled.div`
    margin-bottom:45px;
    @keyframes fadeIn {
        from {opacity: 0%} to {opacity:100%}
    }
    animation: fadeIn 1s;
`

export default {
    Titulo1,
    Text,
    Container,
    Search,
    SearchArea,
    Input,
    Button,
    Results,
    ResultsBody,
    TableRows,
    TableElement,
    TableHeader,
    Form,
    Info,
}
