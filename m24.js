function Funcionario(x,y,z) {
    this.nome = x
    this.cargo = y
    this.salario = z
}

function Estagiario(nomeEstagiario) {
    Funcionario.call(this, nomeEstagiario, "estagiário", 2000)
}

function Gerente(nomeGerente) {
    Funcionario.call(this, nomeGerente, "gerente", 10000)
}

const funcionario1 = new Estagiario("Pedro")
const funcionario2 = new Gerente("Isabela")

console.log(funcionario1)
console.log(funcionario2)