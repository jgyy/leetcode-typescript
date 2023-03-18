USE mysql;
DROP Table If Exists Variables;
Create Table If Not Exists Variables (name varchar(3), value int);
Truncate table Variables;
insert into Variables (name, value)
values ('x', '66');
insert into Variables (name, value)
values ('y', '77');
SELECT *
FROM Variables;