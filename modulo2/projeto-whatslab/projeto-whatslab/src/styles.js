import styled from "styled-components";

export const Container = styled.div`
width:40vw;
height:100vh;
margin: 0 auto;
`  

export const StyledMain = styled.div`
height:95vh;
margin:0 auto;
display:flex;
flex-direction:column;
height:100vh;
width: 100%;
border: solid black 1px;
padding:20px;
span:nth-child(1) {font-weight:bolder;}
`
export const StyledFooter = styled.div`
position:fixed;
bottom: 0;
width:45vw;
// height:5vh;
 padding:20px;
 display:flex;
div{
    width:100%;
    display:flex;

}
`

