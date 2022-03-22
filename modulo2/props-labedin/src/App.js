import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Perfil from './img/foto.jpeg'
import Labenu from './img/labenu.png'

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
         <CardPequeno
          imagem="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261159_Po5JS7ds82XaePJIsG1MiEtHRzOeUPNj.jpg"
          nome="E-mail:"
          descricao="ericfelipess07@gmail.com"
          />
         <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/128/17/17589.png"
          nome="Endereço:"
          descricao="Rua Coronel pão de Queijo"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Labenu} 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
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
