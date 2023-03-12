USE mysql;
DROP TABLE IF EXISTS Vote;
Create table If Not Exists Vote (id int, candidateId int);
Truncate table Vote;
insert into Vote (id, candidateId)
values ('1', '2');
insert into Vote (id, candidateId)
values ('2', '4');
insert into Vote (id, candidateId)
values ('3', '3');
insert into Vote (id, candidateId)
values ('4', '2');
insert into Vote (id, candidateId)
values ('5', '5');
SELECT *
FROM Vote;