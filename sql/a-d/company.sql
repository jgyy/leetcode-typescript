USE mysql;
DROP TABLE IF EXISTS Company;
Create table If Not Exists Company (com_id int, name varchar(255), city varchar(255));
Truncate table Company;
insert into Company (com_id, name, city)
values ('1', 'RED', 'Boston');
insert into Company (com_id, name, city)
values ('2', 'ORANGE', 'New York');
insert into Company (com_id, name, city)
values ('3', 'YELLOW', 'Boston');
insert into Company (com_id, name, city)
values ('4', 'GREEN', 'Austin');
SELECT *
FROM Company;