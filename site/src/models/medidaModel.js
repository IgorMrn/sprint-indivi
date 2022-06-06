var database = require("../database/config");

function buscarUltimasMedidas(id, limite_linhas, idTimes) {
    instrucaoSql = `select 
                          fkUser, 
                          likes, 
                          fkTtimes,
                          DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                      from likes
                      where fkUser = ${id} and fkTimes = ${idTimes}
                      order by id desc limit ${limite_linhas}`;
    console.log(`Executando a instrução SQL: \n${instrucaoSql}`);
    return database.executar(instrucaoSql);
  }
  
  function atualizarMedida(fkTimes, fkUser) {
    instrucaoSql = `  insert into likes(fkTimes,likes) values
                      likes
                      set likes = likes + 1
                      where fkTimes =  ${fkTimes} and fkUser = ${fkUser};
                  `;
  
    console.log(`Executando a instrução SQL: \n${instrucaoSql}`);
    return database.executar(instrucaoSql);
  }
  
  module.exports = {
    buscarUltimasMedidas,
    atualizarMedida,

  };