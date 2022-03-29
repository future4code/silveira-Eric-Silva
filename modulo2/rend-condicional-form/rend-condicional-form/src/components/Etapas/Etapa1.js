import Input from "../input";

const Etapa1 = () => {
    return(
        <>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <Input texto="1. Qual seu nome?"/>
        <Input texto="2. Qual sua idade?"/>
        <Input texto="3. Qual seu email?"/>
        <p>Qual sua escolaridade?</p>
        <select>
        <option value="Ensino médio completo">Ensino médio completo</option>
        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
        
        </select>
        </>
    )
}

export default Etapa1;