var database = require("../database/config")

function listar() {
    var instrucao = `
    Select sum(likes) as Votos from times join likes on fkTimes = idTimes group by nomeTime;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
};