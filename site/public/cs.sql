create database cs;
use cs;



create table usuario(
	id int primary key auto_increment,
    nome varchar(50),
    email varchar(40),
    cpf varchar(11),
    senha varchar(50)
);

create table times(
	idTimes int primary key auto_increment,
    nomeTime varchar(50)	
);

create table jogadores(
	idJogador int primary key auto_increment,
    nomeJogador varchar(50),
    fkTimes int,
    foreign key(fkTimes) references times(idTimes)
);

insert into times values
(null,'Navi'),
(null,'Ence'),
(null,'Furia'),
(null,'Fnatic'),
(null,'Mibr'),
(null,'cloud9'),
(null,'Pain Gaming'),
(null,'Astralis'),
(null,'G3x');

select *from times;
select *from usuario;


create table likes (
fkTimes int,
fkUser int,
likes int,
foreign key (fkTimes) references times (idTimes),
primary key (fkTimes)
);

insert into likes(fkTimes,likes) values
(1,0),
(2,0),
(3,0),
(4,0),
(5,0),
(6,0),
(7,0),
(8,0),
(9,0);

SET FOREIGN_KEY_CHECKS=0;


-- UPDATE PARA SOMAR TODOS OS VOTOS
update likes set likes = likes + 1 where fkTimes = 1 and fkUser = 2;


Select sum(likes) as Votos from times join likes on fkTimes = idTimes group by nomeTime;

select *from times;


