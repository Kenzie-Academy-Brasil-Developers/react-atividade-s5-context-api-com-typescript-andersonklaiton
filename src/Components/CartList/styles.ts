import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 90%;
background-color: lightblue;
 
`

export const ContainerProduct = styled.div`
  width: 33%;
    height: 300px;
    margin: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius:10px;
    p{
        font-size: 12px;
    }
    button{
        margin: 10px;
        width:90%;
        height: 30px;
        background-color: orange;
        text-transform: uppercase;
        color:white;
        border-radius:4px;
        border: none;
        cursor:pointer
        &:hover{
            background-color: darkorange;
        }
    }
`;

export const ContainerImage = styled.div`
    width: 100px;
    height: 170px;
`

export const Img = styled.img`
    width: 100%;
    height:  100%;
`