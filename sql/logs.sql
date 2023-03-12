USE mysql;
DROP TABLE IF EXISTS Logs;
Create table If Not Exists Logs (id int, num int, log_id int);
Truncate table Logs;
insert into Logs (id, num)
values ('1', '1');
insert into Logs (id, num)
values ('2', '1');
insert into Logs (id, num)
values ('3', '1');
insert into Logs (id, num)
values ('4', '2');
insert into Logs (id, num)
values ('5', '1');
insert into Logs (id, num)
values ('6', '2');
insert into Logs (id, num)
values ('7', '2');
insert into Logs (log_id)
values ('1');
insert into Logs (log_id)
values ('2');
insert into Logs (log_id)
values ('3');
insert into Logs (log_id)
values ('7');
insert into Logs (log_id)
values ('8');
insert into Logs (log_id)
values ('10');
SELECT *
FROM Logs;