import React from 'react';
import styled from 'styled-components';

const ImagemButton = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
border-radius: 50px;
width: 200px;
padding: 15px 30px;
margin: 10px auto;
`
const ImagemDaImagem = styled.img`
width: 30px;
margin-right: 10px;
`


function ImagemButton(props) {
    return (
        <ImagemButton>
            <ImagemDaImagem src={ props.imagem }/>
            <h4>{props.nome}</h4>
            <p>{ props.texto }</p>
        </ImagemButton>
    )
}

export default ImagemButton;