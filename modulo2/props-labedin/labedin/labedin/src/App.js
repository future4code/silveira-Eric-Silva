import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CarPequeno';
import Perfil from './img/perfil.jpg'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil}
          nome="Eric Felipe" 
          descricao="Olá! me chamo Eric, tenho 19 anos e sou Desenvolvedor Web Junior, atualmente moro em Campo Alegre de Lourdes-BA, temporariamente falo Javascript, CSS e HTML. Pretendo adquirir mais conhecimento e experiência na área. Conclui o ensino médio ano passado e tô em buscar de uma vaga de emprego no ramo de Tecnologia da Informação."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        <CardPequeno
          imagem="https://t3.ftcdn.net/jpg/01/81/00/34/240_F_181003490_CxW4fQ0H3VypIIsPkFGpMDviO8ysWjOZ.jpg"
          nome="E-mail"
          descricao="ericfelipess07@gmail.com"
        />
        <CardPequeno
          imagem="https://t4.ftcdn.net/jpg/02/72/89/67/240_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg"
          nome="Endereço"
          descricao="Rua Coronel Pão de Queijo"
        />
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
