import React, { useState } from 'react';
import { StyledFooter, Container, StyledMain } from './styles';


function App() {
  const [user,setUser]=useState("");
  const [message, setMessage]=useState("");
  const [sendMessage, setSendMessage]=useState([]);

  // console.log(user)  
  // console.log(message)


  const handleClick = () =>{
    setSendMessage([...sendMessage, {user:user, message:message}])
  }  


  console.log(sendMessage)

  return (
      <Container>
        <StyledMain>
          {sendMessage.map((message,index) => 
          <div key={index}>
            <span>{message.user}: </span>
            <span>{message.message}</span>
          </div>

          )} 
        </StyledMain>
        <StyledFooter>
        <div>

          <input onChange={(e)=>setUser(e.target.value) } placeholder='Usuário'/>
        </div>
        <div>
            <input onChange={(e)=> setMessage(e.target.value) } placeholder='Mensagem'/>
            <button onClick={()=> handleClick(user, message) } >Enviar</button>
        </div>

        </StyledFooter>
      </Container>
  );
}


export default App;
