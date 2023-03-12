USE mysql;
DROP TABLE IF EXISTS Point;
Create Table If Not Exists Point (x int not null);
Truncate table Point;
insert into Point (x)
values ('-1');
insert into Point (x)
values ('0');
insert into Point (x)
values ('2');
SELECT *
FROM Point;