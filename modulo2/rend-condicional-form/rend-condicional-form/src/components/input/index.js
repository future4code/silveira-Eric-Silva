const Input = ({texto, value, onChange}) => {
    return(
        <>
        <p>{texto}</p>
        <input  value={value} onChange={onChange}/>
        </>
    )
}
export default Input