import React from 'react';
import styled from 'styled-components';

const ComponentesEstilizados = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `


const imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `
   


const descricao = styled.div`
 margin-bottom: 15px;
`

const nome = styled.h4`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `


function CardGrande(props) {
    return (
        <ComponentesEstilizados>
            <imagem src={ props.imagem } />
            <descricao>
                <nome>{ props.nome }</nome>
                <p>{ props.descricao }</p>
            </descricao>
        </ComponentesEstilizados>
    )
}

export default CardGrande;