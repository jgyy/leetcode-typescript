USE mysql;
DROP TABLE IF EXISTS Points;
Create Table If Not Exists Points (x int not null, id int, y_value int);
Truncate table Points;
insert into Points (x)
values ('-1');
insert into Points (x)
values ('0');
insert into Points (x)
values ('2');
insert into Points (id, x, y_value)
values ('1', '2', '7');
insert into Points (id, x, y_value)
values ('2', '4', '8');
insert into Points (id, x, y_value)
values ('3', '2', '10');
SELECT *
FROM Points;