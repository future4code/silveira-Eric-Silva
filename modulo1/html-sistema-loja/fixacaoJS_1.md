function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let comissao = (100 * qtdeCarrosVendidos) + (valorTotalVendas*0.05)
let salario = 2000
return salario + comissao
}