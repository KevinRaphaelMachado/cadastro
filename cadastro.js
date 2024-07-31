const prompt = require("prompt-sync")();

const cadastros = [
{
    nomeCadastro: "kevin",
    valorCadastro: 1000 ,

}
]

const modelo = () => {

const nome  =  prompt("qual o nome do produto cadastrado? ")
const valor = prompt("qual o valor do produto? ")


    if (nome !== "" && valor !=="" && !isNaN(valor)) {
        return {
        nomeCadastro,
        valorCadastro,
        }
    }else {
        console.log("cadastro invalido");
        
        return undefined;
    }
};

    const criar = () => {
    
    const criacao = modelo()  

        if (criacao !== undefined) {
        
            cadastros.push(criacao)

        }
    
    };

    criar();
        
