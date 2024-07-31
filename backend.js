const prompt = require("prompt-sync")();
    
const cadastros = [];

const validarIndice = (indice) => indice >= 0 && indice < cadastros.length;

const modelo = () => {

    const nome = prompt("Nome do cadastro: ");
    const valor = parseFloat(prompt("valor do produto cadastrado: ") );
        
    if (nome !== "" && valor !== "" && !isNaN(valor)) {
        return {
            nome,
            valor,
        };
        
        }else {
            console.log("cadastro invalido");
            
            return undefined;
        }
};


    const criar = () => {

        const cadastro = modelo();

        if (cadastro !== undefined) {
            alunos.push(cadastros);
            console.log("Aluno cadastrado com sucesso");
    }
};

const listar = () => {


    if (cadastros.length === 0) {
        console.log("Nenhum produto encontrado");
        return false;
        
    } else {
        cadastros.forEach((cadastro, indice) => {
            console.log(`
                ${indice + 1}
                nome,
                valor,
                
                `);
                
        });
    }
    
    };